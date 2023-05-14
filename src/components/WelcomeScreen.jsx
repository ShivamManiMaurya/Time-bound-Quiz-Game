import React, { useState } from "react";
import WelcomeScreenRules from "./WelcomeScreenRules";
import "../components/styles/Welcome.css";

function WelcomeScreen() {
    const [viewRules, setViewRules] = useState(false);

    const handleRules = () => {
        setViewRules(true);
    };

    return (
        <div className="welcome">
            <div className="welcome-main-div">
                <h1>
                    <span>Welcome</span>
                    <br />
                    to the <span className="superhero-span">Superhero</span>
                    <br />
                    Quiz Game!
                </h1>
                <div className="welcome-main-h3-div">
                    <h3>
                        How much of a geek
                        <br /> are you of superheroes,
                        <br /> comic books, and movies?
                    </h3>
                </div>
                <button className="welcome-take-quiz-btn" onClick={handleRules}>
                    Take Quiz
                </button>
            </div>
            {viewRules ? <WelcomeScreenRules /> : null}
        </div>
    );
}

export default WelcomeScreen;
