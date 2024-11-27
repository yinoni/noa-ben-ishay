import React from "react";
import '../styles/About.css';


const About = () => {
    return (
        <div id="about" className="section about-section">
            <div className="image-container">
                <img className="self-img" alt="self-img" src={require('../assets/noa.png')} />
            </div>
            <div className="body-container">
                <h1 className="heading">קצת עליי</h1>
                <p className="paragraph">נעים מאוד, אני נועה בן ישי, נשואה באושר לאבישי ואמא לשתי בנות מתוקות. עם למעלה מ-8 שנים של ניסיון בתחום ניהול הגיוס ו-HR, אני מתמחה בליווי סטארטאפים בתהליכי גיוס ומסייעת למאות מועמדים למצוא את המקום המדויק עבורם.</p>
                <p className="paragraph">אני עובדת עם מגוון רחב של משרות ותחומים, ומביאה גישה מותאמת אישית לכל תהליך. כל מועמד ולקוח הם ייחודיים, ולכן אני מתמקדת בלמידת ה-DNA של כל אחד מהם, ומפתחת אסטרטגיות גיוס מדויקות.</p>
                <p className="paragraph">בנוסף, אני מעבירה הדרכות ומלווה אנשים בחיפוש העבודה הבאה שלהם, תוך הקפדה על תהליך מדויק ואישי. אני מאמינה שהשקעה בליווי נכון מביאה לתוצאות הטובות ביותר, ואני כאן כדי להבטיח שתשיגו את המטרה שלכם</p>
            </div>
        </div>
    );
}

export default About;