import React from "react";
import "./style.css";


function Table(props) {

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-2"><button className="btn sortBtn mr-2" onClick={() => props.nameSort()}><strong>Name</strong></button><i className="fas fa-sort-alpha-down"></i></div>
                <div className="col-md-2"><button className="btn sortBtn mr-2" onClick={() => props.roleSort()}><strong>Position</strong></button><i className="fas fa-sort-alpha-down"></i></div>
                <div className="col-md-2"><button className="btn sortBtn mr-2" onClick={() => props.deptSort()}><strong>Department</strong></button><i className="fas fa-sort-alpha-down"></i></div>
                <div className="col-md-2"><button className="btn sortBtn mr-2" onClick={() => props.locSort()}><strong>Location</strong></button><i className="fas fa-sort-alpha-down"></i></div>
            </div>
            {props.children}
        </div>
    )
}

export default Table;