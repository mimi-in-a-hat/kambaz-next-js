"use client";

import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <div
      id="wd-signup-screen"
      className="d-flex justify-content-center mt-5"
    >
      <div style={{ width: "300px" }}>
        <h3 className="mb-3">Sign up</h3>

        <FormControl
          placeholder="Username"
          className="mb-2"
        />

        <FormControl
          type="password"
          placeholder="Password"
          className="mb-2"
        />

        <FormControl
          type="password"
          placeholder="Verify Password"
          className="mb-3"
        />

        <Link
          href="/account/profile"
          className="btn btn-danger w-100 mb-3"
        >
          Sign up
        </Link>

        <div className="text-center">
          <Link
            href="/account/signin"
            className="text-decoration-none"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
