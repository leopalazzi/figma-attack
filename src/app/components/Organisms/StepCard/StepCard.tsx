/** @format */
import Bem from "../../../helpers/Bem";
import "./StepCard.style.scss";
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import { useTranslation } from "react-i18next";

const StepCard = ({ stepNumber, description, storyDescription }) => {
    const bem = Bem("stage-description-card-text");

    const { t } = useTranslation();

    return (
        <SimpleCard gap="24px">
            <div className={bem("container")}>
                <h4 className={bem("title")}>{`${t("stepLabel")} ${stepNumber}`}</h4>
                <p className={bem("presentation")}>{description}</p>
            </div>
            <div className={bem("container")}>
                <h4 className={bem("title")}>{t("storyLabel")}</h4>
                <p className={bem("presentation")}>{storyDescription}</p>
            </div>
        </SimpleCard>
    );
};

export default StepCard;
