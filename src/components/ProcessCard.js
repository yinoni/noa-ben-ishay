import React from "react";
import '../styles/ProccessCard.css';

const ProcessCard = ({cardIcon, cardTopic, cardText}) => {
    return (
        <div className="process-card">
            <img src={cardIcon} className="icon" alt="icon" />
            <h1 className="heading">{cardTopic}</h1>
            <p className="paragraph">{cardText}</p>
        </div>
    );
}

export default ProcessCard;