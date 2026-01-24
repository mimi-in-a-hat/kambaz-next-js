import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/cisco.jpg"
              width={200}
              height={150}
              alt="React JS"
            />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link href="/courses/2345" className="wd-dashboard-course-link">
            <Image
              src="/images/cisco.jpg"
              width={200}
              height={150}
              alt="Node JS"
            />
            <div>
              <h5>CS2345 Node.js</h5>
              <p className="wd-dashboard-course-title">
                Server-Side Web Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link href="/courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/images/cisco.jpg"
              width={200}
              height={150}
              alt="Databases"
            />
            <div>
              <h5>CS3456 Databases</h5>
              <p className="wd-dashboard-course-title">
                Relational & NoSQL Databases
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link href="/courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/images/cisco.jpg"
              width={200}
              height={150}
              alt="Algorithms"
            />
            <div>
              <h5>CS4567 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Data Structures & Algorithms
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link href="/courses/5678" className="wd-dashboard-course-link">
            <Image
              src="/images/cisco.jpg"
              width={200}
              height={150}
              alt="Software Engineering"
            />
            <div>
              <h5>CS5678 Software Engineering</h5>
              <p className="wd-dashboard-course-title">
                Agile & Design Patterns
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link href="/courses/6789" className="wd-dashboard-course-link">
            <Image
              src="/images/cisco.jpg"
              width={200}
              height={150}
              alt="Web Development"
            />
            <div>
              <h5>CS6789 Web Development</h5>
              <p className="wd-dashboard-course-title">
                Modern Web Applications
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link href="/courses/7890" className="wd-dashboard-course-link">
            <Image
              src="/images/cisco.jpg"
              width={200}
              height={150}
              alt="Cloud Computing"
            />
            <div>
              <h5>CS7890 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">
                AWS, Docker & Kubernetes
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
