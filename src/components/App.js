import React, {useRef} from "react";
import Heading from "./Heading";
import SolutionSec from "./SolutionSec";
import About from "./About";
import ReviewsSec from "./ReviewsSec";
import ContactSec from "./ContactSec";
import Footer from "./Footer";
import '../styles/App.css';
import arrowUp from '../assets/arrow-up.svg';



const App = () => {
    const reviews = [
        require('../assets/review1.jpg'),
        require('../assets/review2.jpeg'),
        require('../assets/review3.jpeg')
    ];

    const ref = useRef(null);
    const topRef = useRef(null);


    const handleContactBtn = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const handleUpBtnClick = () => {
        topRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <button onClick={handleUpBtnClick} className="go-up-btn"><img src={arrowUp} /></button>
            <div ref={topRef}>
                <Heading onClickContact={handleContactBtn} />
            </div>
            <SolutionSec />
            <About />
            <ReviewsSec reviews={reviews} />
            <div ref={ref} className='contact-me-section'>
                <ContactSec />
            </div>
            <Footer />
        </>
    );
}


export default App;