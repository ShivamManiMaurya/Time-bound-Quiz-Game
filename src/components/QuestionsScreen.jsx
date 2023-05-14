import React, { useEffect, useState } from "react";
import questions from "./questionsData";
import EndScreen from "./EndScreen";

function QuestionsScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizEnd, setIsQuizEnd] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizTime, setIsQuizTime] = useState(false);
    const time = 5;
    const [count, setCount] = useState(time);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            const points = score + 1;
            setScore(points);
        }

        const questionNumber = currentQuestion + 1;
        console.log(questionNumber);
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
            // if (timeInSec < 3) {
            //     setCount(time);
            // }
            setCount(timeInSec);
        }, 1000);

        return () => clearInterval(timer);
    }, [count]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const questionNumber = currentQuestion + 1;
            if (questionNumber < questions.length) {
                setCurrentQuestion(questionNumber);
                setCount(time);
                console.log("que num = ", questionNumber);
            } else {
                setIsQuizEnd(true);
            }
            // setCount(count + 1);
            // console.log(count);
        }, 5000);

        // const waqt = setTimeout(() => {
        //     console.log("30 seconds");
        //     setCount(count + 1);
        // }, 30000);

        return () => clearInterval(timer);
    }, [currentQuestion]);

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
                        <button
                            key={options.optId}
                            onClick={() => handleAnswer(options.isCorrect)}
                        >
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
