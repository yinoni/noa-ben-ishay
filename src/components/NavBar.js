import React, { useState } from "react";
import '../styles/NavBar.css';
import bars from '../assets/bars.svg';


const NBItem = ({item}) => {
    return <a className="nb-item" href={item.href}>{item.itemTxt}</a>
}


const NavBar = ({items, onClickContact}) => {
    const [openMenu, toggleMenu] = useState(false);

    let renderedItems = items.map((item, key) => {
        return <NBItem key={key} item={item} />
    });

    const onMenuClick = () => {
        toggleMenu(!openMenu);
    }

    return (
        <div className="navbar-container">
            <img className="logo" alt="logo" src={require('../assets/logo.png')} />
            <div className={`navbar-items ${!openMenu ? 'hidden' : ''}`}>
                {renderedItems}
                <button onClick={onClickContact} className="contact-btn">צרו קשר</button>
            </div>
            <button className="navbar-menu" onClick={onMenuClick}><img src={bars} alt="bars" /></button>


        </div>
    );
}

export default NavBar;