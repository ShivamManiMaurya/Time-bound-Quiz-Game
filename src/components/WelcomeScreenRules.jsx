import React, { useState } from "react";
import "../components/styles/Welcome.css";
import QuestionsScreen from "./QuestionsScreen";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function WelcomeScreenRules() {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = () => {
        setIsVisible(true);
    };

    return (
        <div className="welcome-rules-div">
            <h1>Quiz Rules</h1>
            <div className="rules-whole-div">
                <div className="rules-div">
                    <div className="rules-mat-div">
                        <TimerOutlinedIcon
                            sx={{ color: "white", fontSize: 40 }}
                        />
                    </div>
                    <div className="rules-text-div">
                        <h4>10 Mins</h4>
                        <p>Keep in mind that it's a time-bound quiz</p>
                    </div>
                </div>
                <div className="rules-div">
                    <div className="rules-mat-div">
                        <QuestionAnswerIcon
                            sx={{ color: "white", fontSize: 40 }}
                        />
                    </div>
                    <div className="rules-text-div">
                        <h4>10 Questions</h4>
                        <p>Let's test your superheroes knowledge</p>
                    </div>
                </div>
                <div className="rules-div">
                    <div className="rules-mat-div">
                        <EmojiEventsIcon
                            sx={{ color: "white", fontSize: 40 }}
                        />
                    </div>
                    <div className="rules-text-div">
                        <h4>60% To be a Superhero</h4>
                        <p>
                            All the best! See you on the other side of the
                            portal.
                        </p>
                    </div>
                </div>

                <div>
                    <button
                        className="welcome-take-quiz-btn rules-start-btn"
                        onClick={handleVisibility}
                    >
                        Start
                    </button>
                </div>
                {isVisible ? <QuestionsScreen /> : null}
            </div>
        </div>
    );
}

export default WelcomeScreenRules;
