/** @format */
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import TitleWithDescription from "../../Molecules/TitleWithDescription/TitleWithDescription";
import TimeBox from "../../Molecules/TimeBox/TimeBox";
import { FunctionComponent } from "react";

const TimeBoxCard: FunctionComponent<any> = ({ title, description, universeCode, timeBoxKey }) => {
    return (
        <SimpleCard gap="32px">
            <TitleWithDescription
                title={title}
                description={description}
            />
            <TimeBox
                universeCode={universeCode}
                keyValue={timeBoxKey}
            />
        </SimpleCard>
    );
};

export default TimeBoxCard;
