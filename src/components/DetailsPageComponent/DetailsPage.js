import React, { useEffect, useState } from "react";
import { EducationDetails } from "../EducationDetailsComponent/EducationDetails";
import { AllumniDetails } from "../AllumniDetailsComponent/AllumniDetails";
import { AllumniProfile } from "../AllumniProfileComponent/AllumniProfile";
import { AllumniOrganisations } from "../AllumniOrganisationsComponent/AllumniOrganisations";
import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  const [eduDetails, setEduDetails] = useState();
  const [orgDetails, setOrgDetails] = useState();
  const [logout, setLogout] = useState(true);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    rollNumber: "",
    graduationYear: "",
  });
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/allumni/allumniDetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ allumniId: location.state.id }),
          }
        );
        if (!response.ok) {
          alert("Unable to Load Details");
        }
        const result = await response.json();
        console.log(result);
        setEduDetails(result.education);
        setOrgDetails(result.orgs);
        let det = {
          firstName: result.firstName,
          lastName: result.lastName,
          rollNumber: result.rollNumber,
          graduationYear: result.graduationYear,
          contactNumber: result.contactNumber,
          email: result.email,
        };
        setPersonalDetails(det);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const handleBeforeUnload = () => {
      fetchData();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <AllumniProfile email={personalDetails.email} />
            <EducationDetails
              education={eduDetails}
              allumniId={location.state.id}
            />
          </div>
          <div className="col-md-8">
            <AllumniDetails details={personalDetails} />
            <AllumniOrganisations
              orgs={orgDetails}
              allumniId={location.state.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
