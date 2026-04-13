"use client";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/InputGroupText";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";

export default function AssignmentsControls() {
  const router = useRouter();
  const { cid } = useParams();

  return (
    <div
      id="wd-assignments-controls"
      className="mb-4 d-flex align-items-center"
    >
      {/* Search */}
      <InputGroup className="me-3" style={{ maxWidth: "300px" }}>
        <InputGroupText>
          <FaSearch />
        </InputGroupText>
        <FormControl placeholder="Search for Assignment" />
      </InputGroup>

      {/* Buttons floated right */}
      <div className="ms-auto text-nowrap">
        <Button variant="secondary" size="lg" className="me-2">
          <FaPlus className="me-2" />
          Group
        </Button>
        <Button 
          variant="danger" 
          size="lg"
          onClick={() => router.push(`/courses/${cid}/assignments/new`)}
        >
          <FaPlus className="me-2" />
          Assignment
        </Button>
      </div>
    </div>
  );
}
