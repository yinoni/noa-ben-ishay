import React, { useState } from "react";
import '../styles/ReviewsSec.css';

const ReviewCard = ({imgSrc}) => {
    return (
        <img className="card-img" alt="card-img" src={imgSrc} />
    )
}

const ReviewsSec = ({reviews}) => {
    const reviewsLen = Math.floor(reviews.length / 2);
    const [activeImg, setActiveImg] = useState(reviewsLen);
    const reviewsComponents = reviews?.map((rev, key) => {
        return <ReviewCard key={key}  imgSrc={rev} />
    });

    const dotsComponents = reviews?.map((rev, key) => {
        return (<button className={`dot ${key === activeImg ? "active" : ''}`}></button>);
    });

    return (
        <div id="reviews" className="section reviews-section">
            <h1 className="heading">לקוחות מספרים</h1>
            <p className="paragraph">הלקוחות שלנו מספרים איך השירות שלנו הוביל אותם להישגים ולמציאת משרות ייחודיות</p>
            <div className="image-slider">
                <div className="images-cont">
                    {reviewsComponents[activeImg - 1]}
                    {reviewsComponents[activeImg]}
                </div>
                <div className="dots-cont">
                    {dotsComponents}
                </div>
                
            </div>

        </div>
    );
}

export default ReviewsSec;