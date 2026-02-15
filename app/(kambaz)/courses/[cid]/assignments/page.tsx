"use client";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import { useParams } from "next/navigation";
import { assignments } from "@/app/(kambaz)/database";
import React from "react";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  dueDate: string;
  availableDate: string;
  points: number;
}

const Assignments: React.FC = () => {
  const params = useParams();
  const cid = params.cid as string;

  // Filter assignments for the current course
  const courseAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );

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
