/** @format */

import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { onBoardingbuttonsConfig } from "../../config/buttonOnBoarding.config";
import ActionButton from "../../components/Atoms/ActionButton/ActionButton";
import Bem from "../../helpers/Bem";
import "./OnBoarding.style.scss";
// @ts-ignore
import onBoarding1 from "../../assets/onboarding-1.jpg";
// @ts-ignore
import onBoarding2 from "../../assets/onboarding-2.jpg";
// @ts-ignore
import onBoarding3 from "../../assets/onboarding-3.jpg";
// @ts-ignore
import onBoarding4 from "../../assets/onboarding-4.jpg";

import Quiz from "../../components/Molecules/Quiz/Quiz";
import { AppContext } from "../../store/appContext";

export const OnBoarding: FunctionComponent<any> = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const b = Bem("on-boarding");
    const { onBoardingAnswers, setOnBoardingAnswers } = useContext(AppContext);
    const location = useLocation();
    const [key, setKey] = useState(location.pathname);

    let onBoardingImg;
    switch (id) {
        case "1":
            onBoardingImg = onBoarding1;
            break;
        case "2":
            onBoardingImg = onBoarding2;
            break;
        case "3":
            onBoardingImg = onBoarding3;
            break;
        case "4":
            onBoardingImg = onBoarding4;
            break;
    }

    const currentOnBoarding: any = t(`onboarding.step_${id}`, { returnObjects: true });

    useEffect(() => {
        setKey(location.pathname);
    }, [location.pathname]);

    return (
        <div
            className={b("container")}
            key={key}
        >
            <div className={b("left")}>
                <div className={b("progress-bar", { [id]: true })}></div>
                <Quiz
                    title={currentOnBoarding.quiz.title}
                    answers={currentOnBoarding.quiz.answers}
                    onSelectAnswer={(event) => {
                        setOnBoardingAnswers((prev) => {
                            const splitedValue = event.target.value.split("_");
                            const valueId = splitedValue[splitedValue.length - 1];
                            return {
                                ...prev,
                                [`step_${id}`]: valueId,
                            };
                        });
                    }}
                />
                <div>
                    {onBoardingbuttonsConfig[`step_${id}`](t, navigate).map((buttonConfig, index) => {
                        return (
                            <ActionButton
                                key={`onBoardingBtn-${index}`}
                                {...buttonConfig}
                                disabled={!!!onBoardingAnswers[`step_${id}`]}
                            />
                        );
                    })}
                </div>
            </div>
            <img src={onBoardingImg} />
        </div>
    );
};

export default OnBoarding;
