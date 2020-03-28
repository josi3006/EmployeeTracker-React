import React from "react";

function Table(props) {
    return <div className="container">
        <div className="row">
            <div className="col-sm-2"><button className="sortBtn mr-2"><strong>Name</strong></button><i className="fas fa-sort-alpha-down"></i></div>
            <div className="col-sm-3"><button className="sortBtn mr-2"><strong>Position</strong></button><i className="fas fa-sort-alpha-down"></i></div>
            <div className="col-sm-2"><button className="sortBtn mr-2"><strong>Department</strong></button><i className="fas fa-sort-alpha-down"></i></div>
            <div className="col-sm-2"><button className="sortBtn mr-2"><strong>Location</strong></button><i className="fas fa-sort-alpha-down"></i></div>
        </div>
        {props.children}
    </div>
}

export default Table;