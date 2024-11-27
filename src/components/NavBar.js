import React, { useState } from "react";
import '../styles/NavBar.css';
import bars from '../assets/bars.svg';


const NBItem = ({itemTxt}) => {
    return <a className="nb-item" href="#">{itemTxt}</a>
}


const NavBar = ({items}) => {
    const [openMenu, toggleMenu] = useState(true);

    let renderedItems = items.map((item, key) => {
        return <NBItem key={key} itemTxt={item} />
    });

    const onMenuClick = () => {
        toggleMenu(!openMenu);
    }

    return (
        <div className="navbar-container">
            <img className="logo" alt="logo" src={require('../assets/logo.png')} />
            <div className={`navbar-items ${!openMenu ? 'hidden' : ''}`}>
                {renderedItems}
                <button className="contact-btn">צרו קשר</button>
            </div>
            <button className="navbar-menu" onClick={onMenuClick}><img src={bars} alt="bars" /></button>


        </div>
    );
}

export default NavBar;