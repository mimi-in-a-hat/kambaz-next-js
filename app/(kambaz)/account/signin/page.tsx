import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Signin() {
  return (
    <div
      id="wd-signin-screen"
      className="d-flex justify-content-center mt-5"
    >
      <div style={{ width: "300px" }}>
        <h3 className="mb-3">Sign in</h3>

        <FormControl
          id="wd-username"
          placeholder="Username"
          className="mb-2"
        />

        <FormControl
          id="wd-password"
          type="password"
          placeholder="Password"
          className="mb-3"
        />

        <Link
          id="wd-signin-btn"
          href="/account/profile"
          className="btn btn-danger w-100 mb-3"
        >
          Sign in
        </Link>

        <div className="text-center">
          <Link
            id="wd-signup-link"
            href="/account/signup"
            className="text-decoration-none"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
