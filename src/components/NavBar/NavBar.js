import React from 'react';
import logo from '../../Images/logo2.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-bar mt-2">
                <div className="container">
                    <div className="row">
                    <div className="col col-md-6">
                        <img className="logo" src={logo} alt=""/>
                    </div>
                    <div className="collapse navbar-collapse col col-md-6">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/"><i className="fas fa-shopping-cart"></i></a>
                            <a className="nav-link" href="/" >Home</a>
                            <a className="nav-link" href="/">Login</a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;