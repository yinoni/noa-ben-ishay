import React from "react";
import lamp from '../assets/lamp.svg';
import SolutionCard from "./SolutionCard";
import ProcessCard from "./ProcessCard";
import check from '../assets/check.svg';
import chip from '../assets/chip.svg';
import flag from '../assets/flag.svg';
import ladder from '../assets/ladder.svg';
import pallette from '../assets/pallette.svg';
import users from '../assets/users.svg';
import '../styles/SolutionSec.css';


const SolutionSec = () => {
    return (
        <div className="section solution-section">
            <div className="top-part">
                <img className="lamp-img" alt="lamp" src={lamp} />
                <h1 className="heading">מה אני מציעה</h1>
                <div className="cards-container">
                    <SolutionCard cardTopic='הד אנטינג' cardText='אני מתמחה באיתור כוח אדם איכותי ומדויק, המותאם לצרכים הייחודיים של החברה שלך. השירות שלי מתבסס על הצלחה בלבד, ומטרתי היא למצוא את המועמד המושלם שיתאים לא רק לדרישות המקצועיות, אלא גם לתרבות הארגונית. יחד, נבנה תהליך גיוס חכם וממוקד, כדי להבטיח שתשיג את התוצאות הטובות ביותר.' />
                    <div className="line"></div>
                    <SolutionCard cardTopic='שירות מנוהל' cardText=' אם אתם עסוקים מדי כדי להתמקד בגיוס עובדים, אני כאן כדי לעזור! בשירות המנוהל שלי, נעבוד יחד כדי להבין את הצרכים הייחודיים של החברה שלכם. אני אנהל עבורכם את כל תהליך הגיוס, מהגדרת המשרות ועד לראיונות, תוך שמירה על קשר הדוק איתכם. כך תוכלו להתרכז במה שאתם עושים הכי טוב, בעוד אני דואגת לכך שתמצאו את המועמדים המושלמים שיתאימו לארגון שלכם.' />
                </div>
            </div>
            <div className="bottom-part">
                <ProcessCard cardIcon={pallette} cardTopic="פרסום משרות באופן יצירתי" cardText="נשתמש בגישות חדשניות כדי למשוך את המועמדים הנכונים" />
                <ProcessCard cardIcon={chip} cardTopic="ניהול תהליך גיוס מלא" cardText="אני דואגת לכל שלב בתהליך, כדי שתוכלו להקדיש את זמנכם לדברים החשובים" />
                <ProcessCard cardIcon={ladder} cardTopic="חיפוש ייזום ברשתות החברתיות" cardText="ניצול הרשתות החברתיות לאיתור מועמדים פוטנציאליים" />
                <ProcessCard cardIcon={users} cardTopic="ראיונות טלפוניים ופרונטליים" cardText="להכיר את המועמדים לעומק ולוודא את התאמתם" />
                <ProcessCard cardIcon={check} cardTopic="בדיקת ממליצים" cardText="כדי לוודא שהמועמדים מתאימים לצרכים שלכם" />
                <ProcessCard cardIcon={flag} cardTopic="סדנת ליווי קריירה" cardText='שלושה מפגשים שביחד נמפה את הקריירה עד כה,נדייק את קו"ח ונלמד איך לגשת לראיונות עבודה'/>
            </div>
        </div>
    );
}

export default SolutionSec;