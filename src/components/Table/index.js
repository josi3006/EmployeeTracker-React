import React from "react";

function Table(props) {
    return <div className="container">
        <div className="row">
            <div className="col-sm-2"><strong>Name</strong></div>
            <div className="col-sm-3"><strong>Position</strong></div>
            <div className="col-sm-2"><strong>Department</strong></div>
            <div className="col-sm-2"><strong>Location</strong></div>
        </div>
        {props.children}
    </div>
}

export default Table;