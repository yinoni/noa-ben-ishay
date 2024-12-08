import React from "react";
import NavBar from "./NavBar";
import '../styles/Heading.css';


const Heading = ({onClickContact}) => {
    const nbItems = [{itemTxt: 'ראשי', href: '/'}, {itemTxt: 'אודות', href: '#about'}, {itemTxt: 'ביקורות', href: '#reviews'}];
    
    const onContactClick = () => {
        console.log('COntact click!');
    }

    return (
        <div className="section heading-container">
            <NavBar onClickContact={onClickContact} items={nbItems} />
            <div className="heading-sec-body">
                <img className="logo" src={require('../assets/headingImg.png')} />
                <div className="text-container">
                    <h1 className="heading">הפתרון המדויק לגיוס עובדים מנוסים נמצא אצלי</h1>
                    <p className="paragraph">שירותי הד האנטינג והשמה בהתאמה אישית לחברות שמחפשות את המועמדים המובילים בשוק</p>
                    <button onClick={onClickContact} className="contact-btn">צרו קשר לקבלת ייעוץ</button>
                </div>
                
            </div>
        </div>
    );
}

export default Heading;