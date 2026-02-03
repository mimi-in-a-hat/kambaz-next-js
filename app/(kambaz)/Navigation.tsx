import Link from "next/link";

export default function CourseNavigation() {
  return (
    <div
      id="wd-courses-navigation"
      className="list-group wd fs-5 rounded-0"
    >
      <Link
        href="/courses/1234/home"
        className="list-group-item list-group-item-action active border-0"
        id="wd-course-home-link"
      >
        Home
      </Link>

      <Link
        href="/courses/1234/modules"
        className="list-group-item list-group-item-action text-danger border-0"
        id="wd-course-modules-link"
      >
        Modules
      </Link>

      <Link
        href="/courses/1234/piazza"
        className="list-group-item list-group-item-action text-danger border-0"
        id="wd-course-piazza-link"
      >
        Piazza
      </Link>

      <Link
        href="/courses/1234/zoom"
        className="list-group-item list-group-item-action text-danger border-0"
        id="wd-course-zoom-link"
      >
        Zoom
      </Link>

      <Link
        href="/courses/1234/assignments"
        className="list-group-item list-group-item-action text-danger border-0"
        id="wd-course-assignments-link"
      >
        Assignments
      </Link>

      <Link
        href="/courses/1234/quizzes"
        className="list-group-item list-group-item-action text-danger border-0"
        id="wd-course-quizzes-link"
      >
        Quizzes
      </Link>

      <Link
        href="/courses/1234/people/Table"
        className="list-group-item list-group-item-action text-danger border-0"
        id="wd-course-people-link"
      >
        People
      </Link>
    </div>
  );
}
