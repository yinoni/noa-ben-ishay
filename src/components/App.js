import React from "react";
import Heading from "./Heading";
import SolutionSec from "./SolutionSec";
import About from "./About";
import ReviewsSec from "./ReviewsSec";
import ContactSec from "./ContactSec";
import Footer from "./Footer";
import '../styles/App.css';



const App = () => {
    const reviews = [
        require('../assets/review1.jpeg'),
        require('../assets/review2.jpeg'),
        require('../assets/review3.jpeg'),
    ];

    return (
        <>
            <Heading />
            <SolutionSec />
            <About />
            <ReviewsSec reviews={reviews} />
            <ContactSec />
            <Footer />
        </>
    );
}


export default App;