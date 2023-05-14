import React, { useState } from "react";
import QuestionsScreen from "./QuestionsScreen";

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
                    <h4>You are a SuperHero</h4>
                    <div className="score">
                        <h5>You Scored</h5>
                        <div className="score-points">
                            <h1>{score * 10}</h1>
                            <p>points</p>
                        </div>
                    </div>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            ) : (
                <div className="lose">
                    <h1>Game Over...!</h1>
                    <h4>You are not a SuperHero</h4>
                    <div className="score">
                        <h5>You Scored</h5>
                        <div className="score-points">
                            <h1>{score * 10}</h1>
                            <p>points</p>
                        </div>
                    </div>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            )}
        </div>
    );
}

export default EndScreen;
