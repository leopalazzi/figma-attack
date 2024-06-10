/** @format */
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import Quiz from "../../Molecules/Quiz/Quiz";
import ActionButton from "../../Atoms/ActionButton/ActionButton";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const QuizCard: FunctionComponent<any> = ({ title, answers, onSelectAnswer, quizIndex, quizLength, onSubmitAnswer, quizKey, isButtonDisabled }) => {
    const { t } = useTranslation();

    return (
        <SimpleCard gap="24px">
            <span>
                {quizIndex + 1}/{quizLength}
            </span>
            <Quiz
                title={title}
                answers={answers}
                onSelectAnswer={onSelectAnswer}
                keyValue={quizKey}
            />
            <ActionButton
                label={t("submitLabel")}
                onClick={onSubmitAnswer}
                disabled={isButtonDisabled}
            />
        </SimpleCard>
    );
};

export default QuizCard;
