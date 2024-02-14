import React from "react";

export const AllumniDetails = ({ details }) => {
  const allumniDetails = {
    firstName: "first name",
    lastName: "last name",
    contactNumber: "123456789",
    address: "ajb vka vk bkeerkffb f jkwfnw f jnwfl ",
  };
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Personal Details</h5>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">First Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">{details.firstName}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Last Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">{details.lastName}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Contact Number</h6>
          </div>
          <div className="col-sm-9 text-secondary">{details.contactNumber}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Roll Number</h6>
            <div className="col-sm-9 text-secondary">{details.rollNumber}</div>
          </div>
          <div className="col-sm-3">
            <h6 className="mb-0">Passing Year</h6>
            <div className="col-sm-9 text-secondary">
              {details.graduationYear}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
