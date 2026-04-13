"use client";
import { useState, useEffect } from "react";
import PeopleTable from "../../courses/[cid]/people/Table/page";
import * as client from "../client";
import FormControl from "react-bootstrap/esm/FormControl";
import { FaPlus } from "react-icons/fa";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

export default function Users() {
 const [users, setUsers] = useState<User[]>([]);
 const [role, setRole] = useState("");

 const fetchUsers = async () => {
   const foundUsers = await client.findAllUsers();
   setUsers(foundUsers);
 };

    const createUser = async () => {
    const userIndex = users.length + 1;
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${userIndex}`,
      username: `newuser${userIndex}`,
      password: "password123",
      email: `email${userIndex}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

  const filterUsersByName = async (name: string) => {
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

 useEffect(() => {
   const loadUsers = async () => {
     const foundUsers = await client.findAllUsers();
     setUsers(foundUsers);
   };
   loadUsers();
 }, []);
 return (
   <div>
    <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
      </button>
     <h3>Users</h3>
     <FormControl onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
             className="float-start w-25 me-2 wd-filter-by-name" />
     <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
     <PeopleTable users={users} fetchUsers={fetchUsers} />
   </div>
);}
