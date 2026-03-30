"use client";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { deleteAssignment, setAssignments } from "./reducer";
import * as client from "./client";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  dueDate: string;
  availableDate: string;
  availableUntilDate?: string;
  points: number;
}

const Assignments: React.FC = () => {
  const params = useParams();
  const cid = params.cid as string;
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

  useEffect(() => {
    const fetchAssignments = async () => {
      const courseAssignments = await client.findAssignmentsForCourse(cid);
      dispatch(setAssignments(courseAssignments));
    };
    fetchAssignments();
  }, [cid, dispatch]);

  // Filter assignments for the current course
  const courseAssignments = (assignments as Assignment[]).filter(
    (assignment: Assignment) => assignment.course === cid
  );

  const handleDelete = async (assignmentId: string, assignmentTitle: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove the assignment "${assignmentTitle}"?`
    );
    if (confirmed) {
      await client.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments">
      <AssignmentsControls />

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-4 fs-5 border-gray">
          <div className="bg-secondary p-3 ps-2">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
          </div>

          <ListGroup className="rounded-0">
            {courseAssignments.map((assignment: Assignment) => (
              <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <FaFileAlt className="me-2 text-success fs-4" />
                <Link
                  href={`/courses/${cid}/assignments/${assignment._id}`}
                  className="fw-bold text-decoration-none"
                >
                  {assignment.title}
                </Link>
                <FaTrash
                  className="text-danger float-end ms-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(assignment._id, assignment.title)}
                />
                <br />
                <span className="text-muted fs-6">
                  <strong>Due</strong> {assignment.dueDate} at 11:59pm |{" "}
                  <strong>Points</strong> {assignment.points} |{" "}
                  <strong>Available</strong> {assignment.availableDate}
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Assignments;
