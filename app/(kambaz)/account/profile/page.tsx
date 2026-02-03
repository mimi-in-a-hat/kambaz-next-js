"use client";

import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";

export default function Profile() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div style={{ width: "300px" }}>
        <h3 className="mb-3">Profile</h3>

        <FormControl defaultValue="alice" className="mb-2" />
        <FormControl
          defaultValue="123"
          type="password"
          className="mb-2"
        />
        <FormControl defaultValue="Alice" className="mb-2" />
        <FormControl defaultValue="Wonderland" className="mb-2" />
        <FormControl
          defaultValue="2000-01-01"
          type="date"
          className="mb-2"
        />
        <FormControl
          defaultValue="alice@wonderland"
          type="email"
          className="mb-3"
        />

        <FormSelect defaultValue="FACULTY" className="mb-3">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </FormSelect>

        <Link
          href="/account/signin"
          className="btn btn-danger w-100"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
}
