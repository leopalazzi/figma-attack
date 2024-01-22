/** @format */
import Bem from "../../../helpers/Bem";
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import { useTranslation } from "react-i18next";
import "./TipsCard.style.scss";

const TipsCard = ({ tips }) => {
    const bem = Bem("tips-card");

    const { t } = useTranslation();

    return (
        <SimpleCard gap="24px">
            <h4 className={bem("title")}>{`${t("tipsLabel")}`}</h4>
            <ul className={bem("list")}>
                {tips.map((tip) => {
                    return <li>{tip}</li>;
                })}
            </ul>
        </SimpleCard>
    );
};

export default TipsCard;
