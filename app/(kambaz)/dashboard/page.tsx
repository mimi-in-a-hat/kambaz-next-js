"use client";

import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {/* Course 1 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/courses/1234/home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cisco.jpg"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Full Stack Software Development
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 2 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cisco.jpg" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS2345 Node.js
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Server-Side Web Development
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 3 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cisco.jpg" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS3456 Databases
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Relational & NoSQL Databases
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 4 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cisco.jpg" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS4567 Algorithms
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Data Structures & Algorithms
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 5 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cisco.jpg" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS5678 Software Engineering
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Agile & Design Patterns
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 6 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cisco.jpg" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS6789 Web Development
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Modern Web Applications
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 7 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cisco.jpg" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS7890 Cloud Computing
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    AWS, Docker & Kubernetes
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
