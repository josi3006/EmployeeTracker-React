import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Employee Directory</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
  </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Action</button>
                                    <button className="dropdown-item" type="button">Another action</button>
                                    <button className="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </li>
                        <li><button className="btn btn-outline-success mx-2 my-2 my-sm-0">Sort by Name</button></li>
                        <li><button className="btn btn-outline-success mx-2 my-2 my-sm-0">Sort by Department</button></li>


                    </ul>

                </div>
            </nav>
        </div>
    );
}


export default Navbar;