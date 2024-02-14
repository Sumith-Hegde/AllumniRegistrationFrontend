import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    if (user && user.success === true) {
      navigate("/details", { state: { id: user.allumniId } });
      console.log("SUCCESS");
      login(true);
    }
  }, [user]);
  const verifyLogin = async () => {
    const requestBody = {
      userName: username,
      password: password,
    };
    await fetchCredentials(requestBody);
  };

  const fetchCredentials = async (requestBody) => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/allumni/loginCredentials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (!response.ok) {
        alert("Login Failed");
      }
      const result = await response.json();
      //   console.log(result.success);
      setUser(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-md-6 details">
          <h1>Login</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                verifyLogin();
              }}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Register
            </button>

            {/* {isVerified && (
              <>
                <h1 style={{ "font-color": "white" }}>Success</h1>
              </>
            )} */}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
