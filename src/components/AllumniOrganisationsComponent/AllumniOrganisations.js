import React from "react";
import { useNavigate } from "react-router-dom";

export const AllumniOrganisations = ({ orgs, allumniId }) => {
  // const organisations = {
  //   org1: "Company A",
  //   org2: "Company D",
  //   org3: "Company C",
  //   org4: "Company B",
  // };
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/addOrg", { state: { id: allumniId } });
  };
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Organizations</h5>
        <ul className="list-group">
          {orgs &&
            orgs.map((org, index) => (
              <li key={index} className="list-group-item">
                {org.name + " , " + org.address}
              </li>
            ))}
          {!orgs && <h1>No Organisations Data</h1>}
        </ul>
        <button className="btn btn-primary mt-3" onClick={handleAdd}>
          Add Organization
        </button>
      </div>
    </div>
  );
};
