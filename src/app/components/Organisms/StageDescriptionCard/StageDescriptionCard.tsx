/** @format */
import Bem from "../../../helpers/Bem";
import "./StageDescriptionCard.style.scss";
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import ActionButton from "../../Atoms/ActionButton/ActionButton";
import domtoimage from "dom-to-image";
import { useTranslation } from "react-i18next";

const StageDescriptionCard = ({ title, description }) => {
    const b = Bem("stage-description-card");
    const { t } = useTranslation();

    const exportToPng = () => {
        const currentStage = document.getElementById("stage-card");
        domtoimage
            .toPng(currentStage, { quality: 0.99 })
            .then((dataUrl) => {
                const binary_string = window.atob(dataUrl.replace("data:image/png;base64,", ""));
                const len = binary_string.length;
                const bytes = new Uint8Array(len);
                for (var i = 0; i < len; i++) {
                    bytes[i] = binary_string.charCodeAt(i);
                }
                const t = new Uint8Array(bytes.buffer);
                parent.postMessage({ pluginMessage: { type: "paste-stage", imageData: t } }, "*");
            })
            .catch(function (error) {
                console.error("oops, something went wrong!", error);
            });
    };
    return (
        <SimpleCard>
            <div className={b("text-container")}>
                <h4 className={b("title")}>{title}</h4>
                <p className={b("presentation")}>{description}</p>
            </div>
            <div><ActionButton label={t("pasteStageLabel")} onClick={exportToPng}/></div>
        </SimpleCard>
    );
};

export default StageDescriptionCard;
