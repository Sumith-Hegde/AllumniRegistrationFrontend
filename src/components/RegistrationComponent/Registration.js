import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [graduationYear, setGraduationYear] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [allumniDetails, setAllumniDetails] = useState();
  const [allumniExists, setAllumniExists] = useState(false);
  const [registerResult, setRegisterResult] = useState();
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (registerResult && registerResult.id) {
      navigate("/login");
    } else {
      console.log("fail");
    }
  }, [registerResult]);
  useEffect(() => {
    if (allumniDetails && allumniDetails.id) {
      setAllumniExists(true);
    } else {
      setAllumniExists(false);
    }
  }, [allumniDetails]);
  const checkFields = async () => {
    const requestBody = {
      gradYear: parseInt(graduationYear, 10),
      name: firstName + " " + lastName,
    };
    await fetchAllumniDetails(requestBody);
  };

  const fetchAllumniDetails = async (requestBody) => {
    try {
      const response = await fetch(
        "http://localhost:8080/allumni/studentDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (!response.ok) {
        alert("Allumni Not Found");
      }
      const result = await response.json();
      setAllumniDetails(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const registerAllumni = async (requestBody) => {
    try {
      const response = await fetch(
        "http://localhost:8080/allumni/registerAllumni",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (!response.ok) {
        alert("Registration Failed,Check all the fields");
      }
      const result = await response.json();
      // console.log(requestBody);
      setRegisterResult(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const requestBody = {
      email: email,
      contactNumber: contactNumber,
      userName: username,
      password: password,
      studentId: allumniDetails.id,
    };
    await registerAllumni(requestBody);
    // if (registerResult && registerResult.id) {
    //   navigate("/login");
    // }
  };

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-md-6 details">
          <h1>Regitration</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="graduationYear" className="form-label">
                Graduation Year
              </label>
              <input
                type="text"
                className="form-control"
                id="graduationYear"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
              />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
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

            <div className="space">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  checkFields();
                }}
              >
                Check
              </button>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-primary"
              >
                Go to Login
              </button>
            </div>
            {allumniExists && (
              <>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Set Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Set Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
                  <label htmlFor="contacNumber" className="form-label">
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
                <button onClick={handleRegister} className="btn btn-primary">
                  Register
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Registration;
