import React, { useState } from "react";
import "../components/styles/Welcome.css";
import QuestionsScreen from "./QuestionsScreen";

function WelcomeScreenRules() {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = () => {
        setIsVisible(true);
    };

    return (
        <div className="welcome-rules-div">
            <h1>Quiz Rules</h1>
            <div>
                <img src="" alt="" />
                <div>
                    <h4>10 Mins</h4>
                    <p>Keep in mind that it's a time-bound quiz</p>
                </div>
            </div>
            <div>
                <img src="" alt="" />
                <div>
                    <h4>10 Questions</h4>
                    <p>Let's test your superheroes knowledge</p>
                </div>
            </div>
            <div>
                <img src="" alt="" />
                <div>
                    <h4>60% To be a Superhero</h4>
                    <p>
                        All the best! See you on the other side of the portal.
                    </p>
                </div>
            </div>
            <div>
                <button onClick={handleVisibility}>Start</button>
            </div>
            {isVisible ? <QuestionsScreen /> : null}
        </div>
    );
}

export default WelcomeScreenRules;
