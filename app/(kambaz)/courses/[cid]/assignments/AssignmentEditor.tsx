import React from "react";
import { Form, Button } from "react-bootstrap";

const AssignmentEditor: React.FC = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Edit Assignment</h3>

      <Form>
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue="A1 – HTML Basics"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            defaultValue="Introduction to HTML tags, structure, and basic elements."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            defaultValue={100}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="assignmentDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            defaultValue="2024-09-18"
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default AssignmentEditor;
