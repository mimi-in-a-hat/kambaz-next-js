"use client";
import { ReactNode, useState, useEffect } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { FaAlignJustify } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  description: string;
  image?: string;
  department?: string;
  credits?: number;
  author?: string;
};

type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

type User = {
  _id: string;
  username: string;
  role: string;
};

export default function CoursesLayout(
  { children }: Readonly<{ children: ReactNode }>) {
 const { cid } = useParams<{ cid: string }>();
 const router = useRouter();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);
 const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
 const course = (courses as Course[]).find((course) => course._id === cid);
 const [showCourseNavigation, setShowCourseNavigation] = useState(true);
 
 // Check if user is enrolled in this course
 const isEnrolled = (enrollments as Enrollment[]).some(
   (enrollment) =>
     enrollment.user === (currentUser as unknown as User)?._id && enrollment.course === cid
 );

 const isStudent = (currentUser as unknown as User | null)?.role === "STUDENT";
 const shouldRedirectToDashboard = Boolean(currentUser && isStudent && !isEnrolled);

 useEffect(() => {
   if (shouldRedirectToDashboard) {
     router.push("/dashboard");
   }
 }, [shouldRedirectToDashboard, router]);

 // If not enrolled, show loading or redirect message
 if (shouldRedirectToDashboard) {
   return <div className="p-3">Redirecting to dashboard...</div>;
 }
 
 return (
   <div id="wd-courses">
  <div className="p-3">
    <Breadcrumb course={course} />
  </div>
  <h2 className="text-danger ps-3">
      <FaAlignJustify
        onClick={() => setShowCourseNavigation(!showCourseNavigation)}
        className="me-4 fs-4 mb-1"
        style={{ cursor: "pointer" }}
      />
      {course?.name}
      Course {cid} </h2> <hr />

  <div className="d-flex">
    {showCourseNavigation && <div>
      <CourseNavigation />
    </div>}
    <div className="flex-fill">
      {children}
    </div></div>
</div>

);}
