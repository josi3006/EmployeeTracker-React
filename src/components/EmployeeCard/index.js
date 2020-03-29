import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="row">
      <div className="h-divider"></div>
      <div className="col-md-2">{props.name}</div>
      <div className="col-md-2">{props.role}</div>
      <div className="col-md-2">{props.department}</div>
      <div className="col-md-2">{props.location}</div>
    </div>
  );
}


export default EmployeeCard;
