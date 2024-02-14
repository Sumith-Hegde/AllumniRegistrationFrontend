import React from "react";
import { useNavigate } from "react-router-dom";
export const AllumniProfile = ({ email }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    console.log();
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="Admin"
            className="rounded-circle"
            width="150"
          />
          <div className="mt-3">
            <h4>{email}</h4>
            <button onClick={handleClick}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
