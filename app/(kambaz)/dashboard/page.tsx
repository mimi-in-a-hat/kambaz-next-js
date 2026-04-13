"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { enrollUser, unenrollUser, setEnrollments } from "../enrollments/reducer";
import * as client from "../courses/client";
import * as enrollmentsClient from "../enrollments/client";
import { deleteCourse, setCourses, updateCourse } from "../courses/reducer";

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
  password: string;
  firstName: string;
  lastName: string;
  role: string;
};


export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  ) as Course[];
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedCourses = await client.fetchAllCourses();
        dispatch(setCourses(fetchedCourses));
      } catch (error) {
        console.error(error);
      }

      try {
        const fetchedEnrollments = await enrollmentsClient.findMyEnrollments();
        dispatch(setEnrollments(fetchedEnrollments));
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [currentUser, dispatch]);

  const onUpdateCourse = async (course: Course) => {
    await client.updateCourse(course);
    dispatch(updateCourse(course));
  };

  const enrolledCourses = courses.filter((course) =>
    (enrollments as Enrollment[]).some(
      (enrollment) =>
        enrollment.user === (currentUser as unknown as User)?._id && enrollment.course === course._id
    )
  );

  const displayedCourses = showAllCourses ? courses : enrolledCourses;

  const isEnrolled = (courseId: string) => {
    return (enrollments as Enrollment[]).some(
      (enrollment) =>
        enrollment.user === (currentUser as unknown as User)?._id && enrollment.course === courseId
    );
  };

  const handleEnroll = async (courseId: string) => {
    if (currentUser) {
      await enrollmentsClient.enrollUserInCourse(courseId);
      dispatch(enrollUser({ userId: (currentUser as unknown as User)._id, courseId }));
    }
  };

  const handleUnenroll = async (courseId: string) => {
    if (currentUser) {
      await enrollmentsClient.unenrollUserFromCourse(courseId);
      dispatch(unenrollUser({ userId: (currentUser as unknown as User)._id, courseId }));
    }
  };

  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          Published Courses ({displayedCourses.length})
        </h2>
        <Button 
          variant="primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
        </Button>
      </div>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/courses/${course._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/cisco.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />

                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>

                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>

                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
                {showAllCourses && (
                  <Card.Body>
                    <div className="d-grid gap-2">
                      {isEnrolled(course._id) ? (
                        <Button 
                          variant="danger" 
                          onClick={(e) => {
                            e.preventDefault();
                            void handleUnenroll(course._id);
                          }}
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button 
                          variant="success" 
                          onClick={(e) => {
                            e.preventDefault();
                            void handleEnroll(course._id);
                          }}
                        >
                          Enroll
                        </Button>
                      )}
                      {course.author === (currentUser as unknown as User)?._id && (
                        <Button
                          variant="warning"
                          onClick={(e) => {
                            e.preventDefault();
                            onUpdateCourse(course);
                          }}
                        >
                          Update
                        </Button>
                      )}
                      {course.author === (currentUser as unknown as User)?._id && (
                        <Button 
                          variant="danger" 
                          onClick={(e) => {
                            e.preventDefault();
                            onDeleteCourse(course._id);
                          }}
                        >
                          Delete
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}