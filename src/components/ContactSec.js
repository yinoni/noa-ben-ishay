import React from "react";
import arrowLeft from '../assets/arrow-left.svg';
import '../styles/ContactSec.css';

const ContactSec = () => {
    return (
        <div className="section contact-sec">
            <img className="illustration" alt="illustration" src={require('../assets/contact.png')} />
            <button className="contact-btn">
                <h1 className="heading">?מוכנים למצוא את העובד הבא שלכם</h1>
                <div className="paragraph-cont">
                    <p className="paragraph">!צרו קשר עכשיו</p>
                    <img className="arrow-img" alt="arrow" src={arrowLeft} />
                </div>
            </button>
        </div>
    );
}

export default ContactSec;