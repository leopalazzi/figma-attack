/** @format */
import { FunctionComponent, useState } from "react";
import Bem from "../../../helpers/Bem";
import "./Quiz.style.scss";
import { QuizProps } from "./Quiz.model";

const Quiz: FunctionComponent<QuizProps> = ({ title, answers, onSelectAnswer, keyValue }) => {
    const b = Bem("quiz");
    const [userAnswer, setUserAnswer] = useState(null);

    const onSelectInput = (event) => {
        onSelectAnswer(event);
        setUserAnswer(event.target.value);
    };

    return (
        <div
            className={b("container")}
            key={keyValue}
        >
            <h2 className={b("title")}>{title}</h2>
            <div className={b("answers-container")}>
                {answers.map((answer, i) => {
                    return (
                        <label
                            className={b("label")}
                            key={`answer-${i}`}
                        >
                            <input
                                className={b("radio-button", {checked: answer.value === userAnswer})}
                                type="radio"
                                name="answer"
                                value={answer.value}
                                tabIndex={0}
                                onChange={onSelectInput}
                                required={true}
                            />
                            {answer.label}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default Quiz;
