import React from "react";
import fb from '../assets/fb.svg';
import ins from '../assets/in.svg';
import li from '../assets/li.svg';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="links">
                <div className="page-links">
                    <a className="pl" href="#reviews">ביקורות</a>
                    <a className="pl" href="#about">אודות</a>
                    <a className="pl" href="/">ראשי</a>
                </div>
                <div className="social-links">
                    <a className="sl" href="https://www.linkedin.com/in/noa-ben-ishay-320462158/"><img className="sl" alt="sl" src={li} /></a>
                </div>

            </div>
            <img  className="logo" alt="logo" src={require('../assets/logo.png')} />
        </div>
    );
}

export default Footer;