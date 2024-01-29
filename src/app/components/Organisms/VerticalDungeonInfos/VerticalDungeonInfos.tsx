/** @format */
import "./VerticalDungeonInfos.style.scss";
import TitleWithDescription from "../../Molecules/TitleWithDescription/TitleWithDescription";

const VerticalDungeonInfos = ({ currentDungeon, universeCode }) => {
    const dungeonBackground = require(`../../../assets/dungeonPage/vertical_background_${universeCode}.png`)?.default;

    return (
        <div style={{backgroundImage : `url(${dungeonBackground})`}} className="vertical-dungeon-infos-container">
            <TitleWithDescription
                title={currentDungeon.title}
                description={currentDungeon.description}
            />
        </div>
    );
};

export default VerticalDungeonInfos;
