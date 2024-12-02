import React, { useEffect, useState } from "react";
import '../styles/ReviewsSec.css';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

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
    const [touchX, setTouchX] = useState(null);
    const [currentDiff, setDiff] = useState(null);
    const [phone, setPhone] = useState(false);

    const dotsComponents = reviews?.map((rev, key) => {
        return (<button className={`dot ${key === activeImg ? "active" : ''}`}></button>);
    });

    useEffect(() => {
        if (window.screen.width <= 600) {
            setPhone(true);
          }
    }, []);

    const handleTouchStart = (e) => {
        const touchDown = e.clientX || e.touches[0].clientX 
        console.log('start', touchDown);
        setTouchX(touchDown);
    }

    const handleTouchMove = (e) => {
        const currentTouch = e.touches[0].clientX;
        setDiff(currentTouch - touchX);        
    }

    const handleTouchEnd = (e) => {
        if(currentDiff > 5){
            prev();
        }

        if(currentDiff < -5){
            next();
        }

        setTouchX(null)
    }

    const next = () => {
        setActiveImg(activeImg + 1 >= reviews.length ? 0 : activeImg + 1);
        console.log('next', activeImg);
    }

    const prev = () => {
        setActiveImg(activeImg - 1 < 0 ? reviews.length - 1 : activeImg - 1);
        console.log('prev', activeImg);
    }


    return (
        <div id="reviews" className="section reviews-section">
            <h1 className="heading">לקוחות מספרים</h1>
            <p className="paragraph">הלקוחות שלנו מספרים איך השירות שלנו הוביל אותם להישגים ולמציאת משרות ייחודיות</p>
            <div className="image-slider">
                <div className="images-cont" onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}>
                    <button className="img-btn" onClick={prev}><img src={arrowLeft} /></button>
                    <>
                        {reviewsComponents[activeImg]}
                    </>
                    <button className="img-btn" onClick={next}><img src={arrowRight} /></button>
                </div>
                <div className="dots-cont">
                    {dotsComponents}
                </div>
                
            </div>

        </div>
    );
}

export default ReviewsSec;