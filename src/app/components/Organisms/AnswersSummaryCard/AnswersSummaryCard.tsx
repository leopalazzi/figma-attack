/** @format */
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
// import { ScoreCardProps } from "./ScoreCard.model";
import Bem from "../../../helpers/Bem";
import "./AnswersSummaryCard.style.scss";
import ActionButton from "../../Atoms/ActionButton/ActionButton";
import correctAnswerLogo from "../../../assets/svg/correctAnswer.svg";
import wrongAnswerLogo from "../../../assets/svg/wrongAnswer.svg";

const AnswersSummaryCard: FunctionComponent<any> = ({ questions, answers, onClickRetry }) => {
    const { t } = useTranslation();
    const b = Bem("answers-summary-card");

    return (
        <SimpleCard gap="24px">
            <h2 className={b("title")}>{t("answersSummaryCard.summary")}</h2>
            {questions.map((question, index) => {
                const currentAnswer = answers[index];
                const { isCorrect, answer } = currentAnswer;
                return (
                    <div
                        className={b("question-container")}
                        key={`question-${index}`}
                    >
                        <span className={b("question-index")}>{`Question ${index + 1}.`}</span>
                        <div className={b("question-label")}>{question.title}</div>
                        <span className={b("answer-label")}>{t("answersSummaryCard.answerLabel")}</span>
                        <div className={b("answer-container")}>
                            <img
                                src={isCorrect ? correctAnswerLogo : wrongAnswerLogo}
                                alt={isCorrect ? "Correct answer logo" : "Wrong answer logo"}
                            />
                            <span className={b("answer-title")}>{answer}</span>
                        </div>
                        {
                            !isCorrect && <>
                                <span className={b("answer-label")}>{t("answersSummaryCard.correctAnswer")}</span>
                                <span className={b("answer-title")}>{question.correctAnswer}</span>
                            </>
                        }
                    </div>
                );
            })}
            <div className={b("buttons-block")}>
                <ActionButton
                    label={t("scoreCard.retry")}
                    onClick={onClickRetry}
                />
            </div>
        </SimpleCard>
    );
};

export default AnswersSummaryCard;
