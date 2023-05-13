import React from "react";
import questions from "./questionsData";

function QuestionsScreen() {
    return (
        <div className="questions">
            {questions.map((ques) => {
                return (
                    <div>
                        <h4>{ques.question}</h4>
                        {ques.options.map((options) => {
                            return <h6>{options.optionText}</h6>;
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default QuestionsScreen;
