"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { addAssignment, updateAssignment } from "../reducer";
import * as client from "../client";

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
  const [assignmentNotFound, setAssignmentNotFound] = useState(false);

  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

  // Determine if we're creating a new assignment or editing an existing one
  const isNewAssignment = aid === "new";
  const existingAssignment = !isNewAssignment
    ? (assignments as Assignment[]).find((a: Assignment) => a._id === aid)
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
        setAssignment((prev) => ({ ...prev, course: cid }));
        return;
      }
      if (existingAssignment) {
        setAssignment(existingAssignment);
        return;
      }
      try {
        const foundAssignment = await client.findAssignmentById(aid);
        setAssignment(foundAssignment);
      } catch (error) {
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
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <br /><br />

      <textarea 
        id="wd-description" 
        rows={4} 
        cols={50}
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />

      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input 
                id="wd-points" 
                type="number"
                value={assignment.points} 
                onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">
                Display Grade as
              </label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">
                Submission Type
              </label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry"> Text Entry</label><br />

              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url"> Website URL</label><br />

              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">
                Media Recordings
              </label><br />

              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">
                Student Annotation
              </label><br />

              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload"> File Uploads</label>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input
                id="wd-assign-to"
                defaultValue="Everyone"
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input 
                type="date" 
                id="wd-due-date" 
                value={assignment.dueDate} 
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">
                Available From
              </label>
            </td>
            <td>
              <input 
                type="date" 
                id="wd-available-from" 
                value={assignment.availableDate} 
                onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })}
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-until">
                Until
              </label>
            </td>
            <td>
              <input 
                type="date" 
                id="wd-available-until" 
                value={assignment.availableUntilDate || ""} 
                onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={handleCancel} style={{ padding: "10px 20px" }}>
          Cancel
        </button>
        <button onClick={handleSave} style={{ padding: "10px 20px" }}>
          Save
        </button>
      </div>
    </div>
  );
}
