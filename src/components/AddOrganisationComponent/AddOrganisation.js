import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddOrganisation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orgName, setOrgName] = useState("");
  const [orgAddress, setOrgAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [joiningDate, setJoiningDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [leavingDate, setLeavingDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleAdd = async (event) => {
    event.preventDefault();
    const requestBody = {
      name: orgName,
      address: orgAddress,
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      allumniId: location.state.id,
      position: position,
      joiningDate: joiningDate,
      leavingDate: leavingDate,
    };
    console.log(requestBody);
    await addOrganisation(requestBody);
  };

  const addOrganisation = async (requestBody) => {
    try {
      const response = await fetch(
        "http://localhost:8080/allumni/addOrganisation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (!response.ok) {
        alert("Could not add Organisation");
      }
      const result = await response.json();
      navigate("/details", { state: { id: location.state.id } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-md-8 details">
          <h1 className="mb-4">Add Organisation</h1>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="orgName" className="form-label">
                  Organisation Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="orgName"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="orgAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="orgAddress"
                  value={orgAddress}
                  onChange={(e) => setOrgAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position
              </label>
              <input
                type="text"
                className="form-control"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="joiningDate" className="form-label">
                  Joining Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="joiningDate"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="leavingDate" className="form-label">
                  Leaving Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="leavingDate"
                  value={leavingDate}
                  onChange={(e) => setLeavingDate(e.target.value)}
                />
              </div>
            </div>
            <h2 className="mb-4">HR Details</h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button onClick={handleAdd} className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddOrganisation;
