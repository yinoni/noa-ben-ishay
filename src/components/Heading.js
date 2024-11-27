import React from "react";
import NavBar from "./NavBar";
import '../styles/Heading.css';


const Heading = () => {
    const nbItems = ['ביקורות', 'ראשי', 'אודות'];
    
    return (
        <div className="section heading-container">
            <NavBar items={nbItems} />
            <div className="heading-sec-body">
                <img className="logo" src={require('../assets/headingImg.png')} />
                <div className="text-container">
                    <h1 className="heading">הפתרון המדויק לגיוס עובדים מנוסים נמצא אצלי</h1>
                    <p className="paragraph">שירותי הד האנטינג והשמה בהתאמה אישית לחברות שמחפשות את המועמדים המובילים בשוק</p>
                    <button className="contact-btn">צרו קשר לקבלת ייעוץ</button>
                </div>
                
            </div>
        </div>
    );
}

export default Heading;