import React from "react";


const SolutionCard = ({cardTopic, cardText}) => {
    return (
        <div className="solution-card">
            <h1 className="heading">{cardTopic}</h1>
            <p className="paragraph">{cardText}</p>
        </div>
    );
}

export default SolutionCard;