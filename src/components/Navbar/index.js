import React from "react";
import "./style.css";


function Navbar(props) {
    return (
        <div>
            <div className="container">

                <nav className="navbar navbar-expand-sm fixed-top">
                    <a className="navbar-brand" href="/">Middle Earth, Inc. - Employee Directory</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>




                        <form className="searchForm">
                            <div>
                                <label className="sr-only" for="inputName">Name</label>
                                <div className="input-group">

                                    <input type="text" className="form-control" id="inputName" placeholder="Search by Name" onChange={props.searchInput} />
                                    <div className="input-group-append">
                                        <div className="clearBtn input-group-text" onClick={props.clearAll}>Clear</div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>






                </nav>
            </div>
        </div >
    );
}


export default Navbar;