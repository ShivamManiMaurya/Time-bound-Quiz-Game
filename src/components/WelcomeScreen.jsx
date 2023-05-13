import React, { useState } from "react";
import WelcomeScreenRules from "./WelcomeScreenRules";
import "../components/Welcome.css";

function WelcomeScreen() {
    const [viewRules, setViewRules] = useState(false);

    const handleRules = () => {
        setViewRules(true);
    };

    return (
        <div className="welcome">
            <div className="welcome-main-div">
                <h1>Welcome to the Superhero Quiz Game!</h1>
                <h3>
                    Are you ready to test your knowledge of superheroes, comic
                    books, and movies?
                </h3>
                <button onClick={handleRules}>Take Quiz</button>
            </div>
            {viewRules ? <WelcomeScreenRules /> : null}
        </div>
    );
}

export default WelcomeScreen;
