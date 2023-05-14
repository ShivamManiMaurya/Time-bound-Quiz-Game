import React, { useState } from "react";
import QuestionsScreen from "./QuestionsScreen";
import "./styles/End.css";

function EndScreen({ score }) {
    const [isRestart, setIsRestart] = useState(false);

    const handleRestart = () => {
        setIsRestart(true);
    };

    return isRestart ? (
        <QuestionsScreen />
    ) : (
        <div className="end">
            {score >= 3 ? (
                <div className="won">
                    <h1>Congratulations...!</h1>
                    <h4>
                        You are a <span>SuperHero</span>
                    </h4>
                    <div className="score">
                        <p>You Scored</p>
                        <h1>{score * 10}</h1>
                        <p>points</p>
                    </div>
                    <button className="end-btn" onClick={handleRestart}>
                        Restart
                    </button>
                </div>
            ) : (
                <div className="lose">
                    <h1>Game Over...!</h1>
                    <h4>
                        You are not a <span>SuperHero</span>
                    </h4>
                    <div className="score">
                        <p>You Scored</p>
                        <h1>{score * 10}</h1>
                        <p>Points</p>
                    </div>
                    <button className="end-btn" onClick={handleRestart}>
                        Restart
                    </button>
                </div>
            )}
        </div>
    );
}

export default EndScreen;
