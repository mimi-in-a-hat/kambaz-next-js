"use client";
import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { addAssignment, updateAssignment } from "./reducer";
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

export default function AssignmentEditor() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const aid = params.aid as string;
  const cid = params.cid as string;
  const isNewAssignment = aid === "new";
  const [assignmentNotFound, setAssignmentNotFound] = useState(false);

  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const existingAssignment = !isNewAssignment
    ? (assignments as Assignment[]).find((assignment) => assignment._id === aid)
    : null;

  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "",
    course: cid,
    description: "",
    dueDate: "",
    availableDate: "",
    availableUntilDate: "",
    points: 100,
  });

  useEffect(() => {
    const loadAssignment = async () => {
      if (isNewAssignment) {
        setAssignment((current) => ({ ...current, course: cid }));
        return;
      }

      if (existingAssignment) {
        setAssignment(existingAssignment);
        return;
      }

      try {
        const foundAssignment = await client.findAssignmentById(aid);
        setAssignment(foundAssignment);
      } catch {
        setAssignmentNotFound(true);
      }
    };

    loadAssignment();
  }, [aid, cid, existingAssignment, isNewAssignment]);

  const handleSave = async () => {
    if (isNewAssignment) {
      const newAssignment = await client.createAssignmentForCourse(cid, assignment);
      dispatch(addAssignment(newAssignment));
    } else {
      const updatedAssignment = await client.updateAssignment(assignment);
      dispatch(updateAssignment(updatedAssignment));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  const handleCancel = () => {
    router.push(`/courses/${cid}/assignments`);
  };

  if (!isNewAssignment && assignmentNotFound) {
    return <div className="p-4">Assignment not found</div>;
  }

  return (
    <div className="container py-4" id="wd-assignments-editor">
      <h3 className="mb-4">{isNewAssignment ? "New Assignment" : "Edit Assignment"}</h3>

      <Form className="bg-white p-4 border rounded-3 shadow-sm">
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignment.title}
            onChange={(event) =>
              setAssignment({ ...assignment, title: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={assignment.description}
            onChange={(event) =>
              setAssignment({ ...assignment, description: event.target.value })
            }
          />
        </Form.Group>

        <Row className="mb-3 g-3">
          <Col md={4}>
            <Form.Group controlId="assignmentPoints">
              <Form.Label>Points</Form.Label>
              <Form.Control
                type="number"
                value={assignment.points}
                onChange={(event) =>
                  setAssignment({ ...assignment, points: Number(event.target.value) })
                }
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="assignmentDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={assignment.dueDate}
                onChange={(event) =>
                  setAssignment({ ...assignment, dueDate: event.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="assignmentAvailableDate">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                type="date"
                value={assignment.availableDate}
                onChange={(event) =>
                  setAssignment({ ...assignment, availableDate: event.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="assignmentAvailableUntilDate">
          <Form.Label>Available Until</Form.Label>
          <Form.Control
            type="date"
            value={assignment.availableUntilDate ?? ""}
            onChange={(event) =>
              setAssignment({ ...assignment, availableUntilDate: event.target.value })
            }
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
