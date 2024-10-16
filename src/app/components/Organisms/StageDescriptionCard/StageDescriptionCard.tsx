/** @format */
import Bem from "../../../helpers/Bem";
import "./StageDescriptionCard.style.scss";
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import ActionButton from "../../Atoms/ActionButton/ActionButton";
import domtoimage from "dom-to-image";
import { useTranslation } from "react-i18next";

const StageDescriptionCard = ({ title, description, displayPasteStage }) => {
    const b = Bem("stage-description-card");
    const { t } = useTranslation();

    const exportToPng = () => {
        const overflowStage = document.getElementById("overflow-stage");
        const storyCard = document.getElementById("story-card");
        storyCard.style.setProperty('overflow', 'visible');
        overflowStage.style.setProperty('overflow', 'visible');
        domtoimage
            .toPng(storyCard, { quality: 0.99 })
            .then((dataUrl) => {
                storyCard.style.removeProperty("overflow");
                overflowStage.style.removeProperty("overflow");
                const binary_string = window.atob(dataUrl.replace("data:image/png;base64,", ""));
                const len = binary_string.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++) {
                    bytes[i] = binary_string.charCodeAt(i);
                }
                const buffer = new Uint8Array(bytes.buffer);
                parent.postMessage({ pluginMessage: { type: "paste-stage", imageData: buffer } }, "*");
            })
            .catch(function (error) {
                storyCard.style.overflow = 'scroll';
                console.error("oops, something went wrong!", error);
            });
    };
    return (
        <SimpleCard>
            <div className={b("text-container")}>
                <h4 className={b("title")}>{title}</h4>
                <p className={b("presentation")}>{description}</p>
            </div>
            {displayPasteStage && <div><ActionButton label={t("pasteStageLabel")} onClick={exportToPng}/></div>}
        </SimpleCard>
    );
};

export default StageDescriptionCard;
