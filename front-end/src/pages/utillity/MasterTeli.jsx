import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import TeliModalEditForm from "../../partials/teli-content/TeliModalEditForm";
import TeliTableContent, {
  StatusPill,
} from "../../partials/teli-content/TeliTableContent";
import { retrieveTelis, deleteTeli, countTonase } from "../../store/actions/teli-action";
import { ROLES_MANAGEMENTS, userData } from "../../utils/constants";

function MasterTeli() {
  const dispatch = useDispatch();
  const telis = useSelector((state) => state.telis.list);
  const [startDate, setStartDate] = useState(localStorage.getItem("startDate") ?? moment().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(localStorage.getItem("endDate") ?? moment().add(1, "days").format("YYYY-MM-DD"));

  const onStartChange = (value) => {
    setStartDate(value);
    localStorage.setItem("startDate", value);
  }

  const onEndChange = (value) => {
    setEndDate(value);
    localStorage.setItem("endDate", value);
  }

  useEffect(() => {
    dispatch(retrieveTelis());
  }, []);


  const removeTeli = (id) => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(deleteTeli(id));
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
        Cell: (data) => (
          <a
            href={`/MasterTeli/TeliProfile/${data.row.original.id}?startDate=${startDate}&endDate=${endDate}`}
            className="hover:text-blue-700 font-semibold"
          >
            {" "}
            {data.row.original.fullName}{" "}
          </a>
        ),
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Action",
        // accessor: 'action',
        Cell: (telis) => (
          <div className="flex justify-start">
            {ROLES_MANAGEMENTS["update_teli"].allowedRoles.includes(
              userData?.user?.role
            ) && <TeliModalEditForm id={telis.row.original.id} />}
            {ROLES_MANAGEMENTS["delete_teli"].allowedRoles.includes(
              userData?.user?.role
            ) && (
              <svg
                onClick={() => removeTeli(telis.row.original.id)}
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
            )}
          </div>
        ),
      },
    ],
    [startDate, endDate]
  );

  return <TeliTableContent 
    columns={columns} 
    data={telis} 
    startDate={startDate}
    endDate={endDate}
    setStartDate={onStartChange}
    setEndDate={onEndChange}
  />;
}

export default MasterTeli;
