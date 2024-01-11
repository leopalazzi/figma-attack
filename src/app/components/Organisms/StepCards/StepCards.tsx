/** @format */

import Bem from "../../../helpers/Bem";
import StepCard from "../StepCard/StepCard";
import "./StepCards.style.scss";

const StepCards = ({ steps }) => {
    const b = Bem("step-cards");

    return (
        <div className={b("container")}>
            {steps?.map((step, index) => {
                return (
                    <StepCard
                        stepNumber={index + 1}
                        description={step.description}
                        storyDescription={step.description}
                        key={`${step.title}-${index}`}
                    />
                );
            })}
        </div>
    );
};

export default StepCards;
