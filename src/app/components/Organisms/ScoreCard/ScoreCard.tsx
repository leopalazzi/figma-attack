/** @format */
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { ScoreCardProps } from "./ScoreCard.model";
import Bem from "../../../helpers/Bem";
import "./ScoreCard.style.scss";
import ActionButton from "../../Atoms/ActionButton/ActionButton";

const ScoreCard: FunctionComponent<ScoreCardProps> = ({ score, questionsLength }) => {
    const { t } = useTranslation();
    const b = Bem("score-card");
    const isSuccessfull = questionsLength / score <= 2;

    return (
        <SimpleCard gap="24px">
            <span className={b("description")}>{t("scoreCard.label")}</span>
            <span className={b("result", { success: isSuccessfull })}>
                {score}/{questionsLength}
            </span>
            <div className={b("buttons-block")}>
                <ActionButton
                    label={t("scoreCard.checkResults")}
                    onClick={()=>{}}
                />
                <ActionButton
                    label={t("scoreCard.retry")}
                    onClick={()=>{}}
                />
            </div>
            {/* <Quiz title={title} answers={answers} onSelectAnswer={onSelectAnswer} keyValue={quizKey}/> */}
            {/* <ActionButton label={t("submitLabel")} onClick={onSubmitAnswer}/> */}
        </SimpleCard>
    );
};

export default ScoreCard;
