/** @format */

import { useState } from "react";
import Bem from "../../../helpers/Bem";
import "./Quiz.style.scss";
import ActionButton from "../../Atoms/ActionButton/ActionButton";

const Quiz = ({ title, answers }) => {
    const b = Bem("quiz");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [result, setResult] = useState("");

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const checkAnswer = () => {
        if (selectedAnswer === "paris") {
            setResult("Correct! Paris is the capital of France.");
        } else {
            setResult("Incorrect. Try again!");
        }
    };

    return (
        <div className={b("container")}>
          <div>
            <h2 className={b("title")}>{title}</h2>
            <div className={b("answers-container")}>
                {answers.map((answer) => {
                    return (
                        <label className={b("label")} >
                            <input
                                className={b("radio-button")}
                                type="radio"
                                name="answer"
                                value={answer.value}
                                tabIndex={0}
                                // checked={selectedAnswer === answer.value}
                                onChange={handleAnswerChange}
                            />
                            {answer.label}
                        </label>
                    );
                })}
                </div>
                <ActionButton
                    onClick={checkAnswer}
                    label="Submit"
                />
            </form>
        </div>
    );
};

export default Quiz;
