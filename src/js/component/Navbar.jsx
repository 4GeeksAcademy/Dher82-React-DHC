import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white p-10" href="#">Start Bootstrap</a>
            </div>

            <div className="collapse navbar-collapse navbar-nav mr-5 ms-auto mb-2 mb-lg-0" id="navbarSupportedContent">
                <a className="nav-link text-white" href="#">Home</a>
                <a className="nav-link text-white" href="#">About</a>
                <a className="nav-link text-white" href="#">Services</a>
                <a className="nav-link text-white" href="#">Contact</a>
            </div>
        </nav >
    );
};

export default Navbar;
