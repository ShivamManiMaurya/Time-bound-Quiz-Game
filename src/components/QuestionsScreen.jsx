import React, { useEffect, useState } from "react";
import questions from "./questionsData";
import EndScreen from "./EndScreen";

function QuestionsScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizEnd, setIsQuizEnd] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizTime, setIsQuizTime] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            const points = score + 1;
            setScore(points);
        }

        const questionNumber = currentQuestion + 1;
        console.log(questionNumber);
        if (questionNumber < questions.length) {
            setCurrentQuestion(questionNumber);
        } else {
            setIsQuizEnd(true);
        }
    };
    const [count, setCount] = useState(5);

    // setTimeout(() => {
    //     setCount(count - 1);
    // }, 1000);

    useEffect(() => {
        const timer = setInterval(() => {
            const questionNumber = currentQuestion + 1;
            if (questionNumber < questions.length) {
                setCurrentQuestion(questionNumber);
            } else {
                setIsQuizEnd(true);
            }
            // setCount(count + 1);
            // console.log(count);
        }, 3000);

        // const waqt = setTimeout(() => {
        //     console.log("30 seconds");
        //     setCount(count + 1);
        // }, 30000);

        return () => clearInterval(timer);
    }, [currentQuestion, count]);

    ///////////////////////////////////

    // useEffect(() => {

    // return () => clearTimeout(timer);
    // }, [count]);

    ////////////////////////////

    return !isQuizEnd ? (
        <div className="questions">
            <h1>{count}</h1>
            <div className="question-section">
                <div className="question-count">
                    <span>Question 1</span>/{questions.length}
                </div>
                <div className="question-text">
                    <h4>{questions[currentQuestion].question}</h4>
                </div>
            </div>
            <div className="option-section">
                {questions[currentQuestion].options.map((options) => {
                    return (
                        <button onClick={() => handleAnswer(options.isCorrect)}>
                            {options.optionText}
                        </button>
                    );
                })}
            </div>
        </div>
    ) : (
        <EndScreen score={score} />
    );
}

export default QuestionsScreen;
