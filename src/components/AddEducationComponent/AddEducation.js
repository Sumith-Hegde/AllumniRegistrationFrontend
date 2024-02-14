import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddEducation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [degree, setDegree] = useState("");
  const [joiningYear, setJoiningYear] = useState(
    new Date().getFullYear().toString()
  );
  const [passingYear, setPassingYear] = useState(
    (new Date().getFullYear() + 1).toString()
  );
  const [institutionName, setInstitutionName] = useState("");
  const [institutionAddress, setInstitutionAddress] = useState("");

  const handleAdd = async (event) => {
    event.preventDefault();

    // Validate years
    const isValidYears =
      /^\d{4}$/.test(joiningYear) && /^\d{4}$/.test(passingYear);

    if (!isValidYears) {
      alert("Please enter valid years.");
      return;
    }

    const requestBody = {
      degree: degree,
      joiningYear: parseInt(joiningYear),
      passingYear: parseInt(passingYear),
      institutionName: institutionName,
      institutionAddress: institutionAddress,
      allumniId: location.state.id,
    };

    console.log(requestBody);
    await addEducation(requestBody);
  };

  const addEducation = async (requestBody) => {
    try {
      const response = await fetch(
        "http://localhost:8080/allumni/addEducation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (!response.ok) {
        alert("Could not add Education");
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
          <h1 className="mb-4">Add Education</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="degree" className="form-label">
                Degree
              </label>
              <input
                type="text"
                className="form-control"
                id="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="joiningYear" className="form-label">
                  Joining Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="joiningYear"
                  value={joiningYear}
                  onChange={(e) => setJoiningYear(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="passingYear" className="form-label">
                  Passing Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="passingYear"
                  value={passingYear}
                  onChange={(e) => setPassingYear(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="institutionName" className="form-label">
                Institution Name
              </label>
              <input
                type="text"
                className="form-control"
                id="institutionName"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="institutionAddress" className="form-label">
                Institution Address
              </label>
              <input
                type="text"
                className="form-control"
                id="institutionAddress"
                value={institutionAddress}
                onChange={(e) => setInstitutionAddress(e.target.value)}
              />
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

export default AddEducation;
