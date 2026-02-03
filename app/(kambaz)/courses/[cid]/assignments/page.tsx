import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import React from "react";

const Assignments: React.FC = () => {
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
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <FaFileAlt className="me-2 text-success fs-4" />
              <Link
                href="/courses/1234/assignments/edit"
                className="fw-bold text-decoration-none"
              >
                A1 – HTML Basics
              </Link>
              <br />
              <span className="text-muted fs-6">
                <strong>Due</strong> Sep 18 at 11:59pm |{" "}
                <strong>Points</strong> 100 | <strong>Available</strong> Sep 5
              </span>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Assignments;
