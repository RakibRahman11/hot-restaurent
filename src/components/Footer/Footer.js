import React from 'react';
import './Footer.css';
import footerLogo from '../../Images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark footer">
            <div className="pt-5 d-flex justify-content-between align-items-center">
                <div>
                    <img className="footer-icon ps-5" src={footerLogo} alt='' />
                </div>
                <div className="text-start">
                    <p>About online food</p>
                    <p>Read our blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="text-start pe-5">
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </div>
            </div>
            <div className="pt-5 d-flex justify-content-between align-items-center">
                <div className="text-start">
                    <p className="ps-5">Copyright © Online Food</p>
                </div>
                <div className="flex-row text-start pe-3 d-flex justify-content-around">
                    <p className="mx-4">Privacy policy</p>
                    <p className="mx-4">Terms of use</p>
                    <p className="mx-4">Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;