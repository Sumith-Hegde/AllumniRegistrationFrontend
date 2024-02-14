import React from "react";
import { useNavigate } from "react-router-dom";
import "./EducationDetails.css";
import "@fortawesome/fontawesome-free/css/all.css";

export const EducationDetails = ({ education, allumniId }) => {
  // const education = [
  //   {
  //     degree: "Bachelor of Science",
  //     institutionName: "ABC University",
  //     yearOfPassing: "2020",
  //   },
  //   {
  //     degree: "Master of Arts",
  //     institutionName: "XYZ College",
  //     yearOfPassing: "2022",
  //   },
  // ];
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/addEdu", { state: { id: allumniId } });
  };
  return (
    <div className="card mt-3">
      <ul className="list-group list-group-flush education">
        <div className="row mb-3">
          <div className="col-sm-4 text-center">
            <h6 className="mb-0">Degree</h6>
          </div>
          <div className="col-sm-4 text-center">
            <h6 className="mb-0">Institution Name</h6>
          </div>
          <div className="col-sm-4 text-center">
            <h6 className="mb-0">Year of Passing</h6>
          </div>
        </div>
        <hr />
        {education &&
          education.map((detail, index) => (
            <>
              <div className="row mb-3" key={index}>
                <div className="col-sm-4 text-center">
                  <i className="fas fa-graduation-cap mr-2"></i>
                  <span>{detail.degree}</span>
                </div>
                <div className="col-sm-4 text-center">
                  <p className="text-secondary">{detail.institution}</p>
                </div>
                <div className="col-sm-4 text-center">
                  <p className="text-secondary">{detail.passingYear}</p>
                </div>
              </div>
            </>
          ))}
        {!education && <h1>No Education Details</h1>}
        <button className="btn btn-primary mt-3 leftMargin" onClick={handleAdd}>
          Add Education
        </button>
      </ul>
    </div>
  );
};
