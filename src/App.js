import DetailsPage from "./components/DetailsPageComponent/DetailsPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import ProfilePage from "./components/DetailsPageComponent/ProfilePage";

import Login from "./components/LoginComponent/Login";

import Registration from "./components/RegistrationComponent/Registration";
import AddOrganisation from "./components/AddOrganisationComponent/AddOrganisation";
import { useState } from "react";
import AddEducation from "./components/AddEducationComponent/AddEducation";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login login={setLoggedIn} />} />
          <Route exact path="/" element={<Registration />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
          {loggedIn && (
            <>
              <Route exact path="/details" element={<DetailsPage />} />
              <Route exact path="/addOrg" element={<AddOrganisation />} />
              <Route exact path="/addEdu" element={<AddEducation />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
