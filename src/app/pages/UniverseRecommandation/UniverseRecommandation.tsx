/** @format */
import { FunctionComponent, useContext } from "react";
import "./UniverseRecommandation.style.scss";
import { useNavigate } from "react-router-dom";
import Bem from "../../helpers/Bem";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../store/appContext";
import { universesCode } from "../../config/config";
import UniverseCard from "../../components/Organisms/UniverseCard/UniverseCard";
import ActionButton from "../../components/Atoms/ActionButton/ActionButton";

const UniverseRecommandation: FunctionComponent<any> = () => {
    const navigate = useNavigate();
    const b = Bem("universe-recommandation");
    const { t } = useTranslation();
    const { onBoardingAnswers } = useContext(AppContext);
    const questionsLength = Object.values(onBoardingAnswers).length;

    const countSelections = () => {
        const counts = { "1": 0, "2": 0, "3": 0 };

        for (const step in onBoardingAnswers) {
            const selection = onBoardingAnswers[step];
            counts[selection]++;
        }
        return counts;
    };

    const getRecommendedUniverseCode = (selectionCounts) => {
        const { "1": oneCount, "3": threeCount } = selectionCounts;
        let recommendedUniverseCode = "";
        if (oneCount === questionsLength) {
            recommendedUniverseCode = universesCode.neophyteNexus;
        } else if (threeCount > 2) {
            recommendedUniverseCode = universesCode.masterMetropolis;
        } else {
            recommendedUniverseCode = universesCode.craftmenCrossing;
        }
        return recommendedUniverseCode;
    };

    const onClickAllUniverse = () => {
        navigate("/home");
    }

    const selectionCounts = countSelections();
    const recommendedUniverseCode = getRecommendedUniverseCode(selectionCounts);

    const universes: Array<any> = t("universes", { returnObjects: true });
    const universe = universes.find((universe) => universe.code === recommendedUniverseCode);
    if (!universe) {
        return <></>;
    }
    const numberDungeons = universe.dungeons.length;
    const numberSideQuests = universe.side_quests.length;
    const badgesData = [
        { label: universe.level },
        {
            universe: universe.code,
            label: `${numberDungeons} ${t("dungeonsLabel")}`,
        },
        {
            universe: universe.code,
            label: `${numberSideQuests} ${t("sideQuestsLabel")}`,
        },
    ];
    
    return (
        <div className={b("container")}>
            <div className={b("choice")}>
            <span className={b("label")}>{t("recommandation.label")}</span>
            <UniverseCard
                title={universe.title}
                universCode={universe.code}
                badges={badgesData}
                description={universe.description}
            />
            </div>
            <ActionButton label={t("recommandation.buttonLabel")} onClick={onClickAllUniverse} />
        </div>
    );
};

export default UniverseRecommandation;
