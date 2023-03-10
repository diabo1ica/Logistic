import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../../partials/Banner";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

import UserListContent2, {
  SelectColumnFilter,
  StatusPill,
} from "../../partials/users-items/UserListContent2";
import UserModalEditForm from "../../partials/users-items/UserModalEditForm";
import { retrieveUsers, deleteUser } from "../../store/actions/user-action";


function UserList() {
  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  


  useEffect(() => {
    dispatch(retrieveUsers());
  }, []);

  const removeUser = (id) => {
    if (window.confirm("Are you sure you want to remove this user?")) {
      dispatch(deleteUser(id));
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Fullname",
        accessor: "fullName",
      },
      {
        Header: "Username",
        accessor: "userName",
      },
      {
        Header: "Password",
        accessor: "password",
      },
      {
        Header: "Role",
        Filter: SelectColumnFilter,
        accessor: "role",
      },
      {
        Header: "Jabatan",
        accessor: "jabatan",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Action",
        // accessor: '',
        Cell: (users) => (
          <div className="flex justify-start">
            {/* Edit Icon */}
            <UserModalEditForm id={users.row.original.id}/>
            {/* Delete Icon */}
            <svg
              onClick={() => removeUser(users.row.original.id)}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        ),
      },
    ],
    []
  );

  

  return (
    <div className="grid gap-6 mb-8 md:grid-cols-1 xl:grid-cols-1">
      <UserListContent2 columns={columns} data={users} />
    </div>
  );
}

export default UserList;
