import React from "react";

function EndScreen({ score }) {
    return (
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
                </div>
            )}
        </div>
    );
}

export default EndScreen;
