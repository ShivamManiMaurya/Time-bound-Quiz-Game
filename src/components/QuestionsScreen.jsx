import React, { useEffect, useState } from "react";
import questions from "./questionsData";
import EndScreen from "./EndScreen";
import "./styles/Questions.css";

function QuestionsScreen() {
    const time = 5;
    const [count, setCount] = useState(time);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizEnd, setIsQuizEnd] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            const points = score + 1;
            setScore(points);
        }

        const questionNumber = currentQuestion + 1;
        // console.log(questionNumber);
        if (questionNumber < questions.length) {
            setCurrentQuestion(questionNumber);
            setCount(time);
        } else {
            setIsQuizEnd(true);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const timeInSec = count - 1;
            setCount(timeInSec);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const questionNumber = currentQuestion + 1;
            if (questionNumber < questions.length) {
                setCurrentQuestion(questionNumber);
                setCount(time);
                // console.log("que num = ", questionNumber);
            } else {
                setIsQuizEnd(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentQuestion]);

    return !isQuizEnd ? (
        <div className="questions">
            <div className="question-whole">
                <div className="timer">
                    <h1>{count}</h1>
                </div>
                <div className="question-section">
                    <div className="question-number">
                        <h4>
                            <span>Question {currentQuestion + 1}</span>/
                            {questions.length}
                        </h4>
                    </div>
                    <div className="question-text">
                        <h4>{questions[currentQuestion].question}</h4>
                    </div>
                </div>
                <div className="option-section">
                    {questions[currentQuestion].options.map((options) => {
                        return (
                            <button
                                className="option-btn"
                                key={options.optId}
                                onClick={() => handleAnswer(options.isCorrect)}
                            >
                                {options.optionText}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    ) : (
        <EndScreen score={score} />
    );
}

export default QuestionsScreen;
