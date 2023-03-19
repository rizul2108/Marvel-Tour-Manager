import React from "react";
import Dashboard from "./Dashboard";
import Trip from "./Trip";

const PrevTrip = () => {

  return (
    <Dashboard>
      <div className="admin-details">
          <h1 className="ms-3">Previous Trips</h1>
          <hr />
       <Trip title="title"/>
       </div>
    </Dashboard>
  );
};

export default PrevTrip;