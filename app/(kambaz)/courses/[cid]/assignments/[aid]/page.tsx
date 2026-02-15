"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { assignments } from "@/app/(kambaz)/database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  dueDate: string;
  availableDate: string;
  points: number;
}

export default function AssignmentEditor() {
  const params = useParams();
  const aid = params.aid as string;
  const cid = params.cid as string;

  // Find the assignment with the given ID
  const assignment = assignments.find(
    (a: Assignment) => a._id === aid
  ) as Assignment | undefined;

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input
        id="wd-name"
        defaultValue={assignment.title}
      />
      <br /><br />

      <textarea id="wd-description" rows={4} cols={50}>
        {assignment.description}
      </textarea>

      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={assignment.points} />
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
              <input type="date" id="wd-due-date" defaultValue={assignment.dueDate} />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">
                Available From
              </label>
            </td>
            <td>
              <input type="date" id="wd-available-from" defaultValue={assignment.availableDate} />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-until">
                Until
              </label>
            </td>
            <td>
              <input type="date" id="wd-available-until" />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Link href={`/courses/${cid}/assignments`}>
          <button style={{ padding: "10px 20px" }}>Cancel</button>
        </Link>
        <Link href={`/courses/${cid}/assignments`}>
          <button style={{ padding: "10px 20px" }}>Save</button>
        </Link>
      </div>
    </div>
  );
}
