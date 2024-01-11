/** @format */
import Bem from "../../../helpers/Bem";
import "./StepCard.style.scss";
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import { useTranslation } from "react-i18next";

const StepCard = ({ stepNumber, description, storyDescription }) => {
    const bemTextContainer = Bem("stage-description-card-text");
    const bemStoryContainer = Bem("stage-description-card-story");

    const { t } = useTranslation();

    return (
        <SimpleCard gap="24px">
            <div className={bemTextContainer("container")}>
                <h4 className={bemTextContainer("title")}>{`${t("stepLabel")} ${stepNumber}`}</h4>
                <p className={bemTextContainer("presentation")}>{description}</p>
            </div>
            <div className={bemStoryContainer("container")}>
                <h4 className={bemStoryContainer("title")}>{t("storyLabel")}</h4>
                <p className={bemStoryContainer("presentation")}>{storyDescription}</p>
            </div>
        </SimpleCard>
    );
};

export default StepCard;
