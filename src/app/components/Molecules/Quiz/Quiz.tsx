/** @format */
import { FunctionComponent } from "react";
import Bem from "../../../helpers/Bem";
import "./Quiz.style.scss";
import { QuizProps } from "./Quiz.model";

const Quiz: FunctionComponent<QuizProps> = ({ title, answers, onSelectAnswer, keyValue }) => {
    const b = Bem("quiz");

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
                                className={b("radio-button")}
                                type="radio"
                                name="answer"
                                value={answer.value}
                                tabIndex={0}
                                onChange={onSelectAnswer}
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
