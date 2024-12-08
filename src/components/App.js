import React, {useRef} from "react";
import Heading from "./Heading";
import SolutionSec from "./SolutionSec";
import About from "./About";
import ReviewsSec from "./ReviewsSec";
import ContactSec from "./ContactSec";
import Footer from "./Footer";
import '../styles/App.css';




const App = () => {
    const reviews = [
        require('../assets/review1.jpg'),
        require('../assets/review2.jpeg'),
        require('../assets/review3.jpeg')
    ];

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <Heading onClickContact={handleClick} />
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