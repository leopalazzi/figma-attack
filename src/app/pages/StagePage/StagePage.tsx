/** @format */

import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import NextStage from "../../components/Molecules/NextStage/NextStage";
import { useEffect, useState } from "react";
import TwoColumnsGrid from "../../components/Template/TwoColumnsGrid/TwoColumnsGrid";
import StageDescriptionCard from "../../components/Organisms/StageDescriptionCard/StageDescriptionCard";
import StepCards from "../../components/Organisms/StepCards/StepCards";
import TipsCard from "../../components/Molecules/TipsCard/TpsCard";
import "./StagePage.style.scss";
import Layout from "../../components/Template/Layout/Layout";
import TimeBoxCard from "../../components/Organisms/TimeBoxCard/TimeBoxCard";
import QuizCard from "../../components/Organisms/QuizCard/QuizCard";
import ScoreCard from "../../components/Organisms/ScoreCard/ScoreCard";

const StagePage = () => {
    const { t } = useTranslation();
    const { dungeonCode, stageNumber, universeCode } = useParams();
    const { pathname } = useLocation();
    const [quizIndex, setQuizIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const universes: Array<any> = t("universes", { returnObjects: true });
    const currentUniverse = universes.find((universe) => universe.code === universeCode);
    const currentDungeon = currentUniverse?.dungeons.find((dungeon) => {
        if (dungeon.code === dungeonCode) {
            return true;
        }
    });
    const currentStage = currentDungeon?.stages[Number(stageNumber) - 1];
    const nextStage = currentDungeon?.stages[Number(stageNumber)];
    const universeBaseUrl = `/universe/${universeCode}`;
    const dungeonBaseUrl = `${universeBaseUrl}/dungeon/${dungeonCode}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onSelectAnswer = (event) => {
        setUserAnswers((prev) => {
            const currentQuiz = currentStage.quizs[quizIndex];
            const isCorrectAnswer = currentQuiz.correctAnswers === event.target.value;
            return {
                ...prev,
                [quizIndex]: isCorrectAnswer,
            };
        });
    };

    const onSubmitAnswer = () => {
        setQuizIndex((prev) => {
            return prev + 1;
        });
    };

    const getCurrentStage = () => {
        let stageComponent = <></>;
        switch (currentStage.type) {
            case "tips":
                stageComponent = currentStage.tips?.length > 0 ? <TipsCard tips={currentStage.tips} /> : <></>;
                break;
            case "steps":
                stageComponent = currentStage.steps?.length > 0 ? <StepCards steps={currentStage.steps} /> : <></>;
                break;
            case "quiz":
                let correctAnswers = 0;
                const quizLength= currentStage.quizs.length;
                Object.entries(userAnswers).forEach(([_, value]) => {
                    if(value)
                    {
                        correctAnswers +=1;
                    }
                });

                if(quizIndex === currentStage.quizs.length)
                {
                    Object.entries(userAnswers).forEach(([key, value]) => {console.log(key, value)});
                    stageComponent = <ScoreCard score={correctAnswers} questionsLength={quizLength}/>
                }
                if (currentStage.quizs?.length > 0 && quizIndex < quizLength) {
                    const currentQuiz = currentStage.quizs[quizIndex];
                    const { title, answers } = currentQuiz;
                    const answersArray = answers.map((answer) => {
                        return {
                            value: answer,
                            label: answer,
                        };
                    });
                    stageComponent = (
                        <QuizCard
                            title={title}
                            answers={answersArray}
                            onSelectAnswer={onSelectAnswer}
                            userAnswers={userAnswers}
                            quizIndex={quizIndex}
                            quizLength={quizLength}
                            onSubmitAnswer={onSubmitAnswer}
                            quizKey={`quiz-${quizIndex}`}
                        />
                    );
                }
                break;
            case "timebox":
                stageComponent = (
                    <TimeBoxCard
                        title={currentStage.title}
                        description={currentStage.description}
                    />
                );
            default:
                break;
        }
        return stageComponent;
    };
    const universeImg = require(`../../assets/universes/background_${currentUniverse.code}.png`)?.default;

    return (
        <Layout
            breadcrumbLinks={[
                { url: "/home", label: t("universesLabel") },
                { url: universeBaseUrl, label: currentUniverse.title },
                { url: dungeonBaseUrl, label: currentDungeon.title },
            ]}
            containerProps={{
                style: {
                    backgroundImage: `url(${universeImg})`,
                    height: `612px`,
                    // height:"300px",
                    padding: "40px",
                },
            }}
        >
            <TwoColumnsGrid
                id="stage-card"
                customClassName="stage-page-two-columns"
            >
                <div className="stage-description-container">
                    <StageDescriptionCard
                        title={currentStage.title}
                        description={currentStage.description}
                    />
                </div>
                <div className="stage-description-container" id="overflow-stage">{getCurrentStage()}</div>
                {/* <StepCards steps={currentStage.steps} /> */}
            </TwoColumnsGrid>
            {currentStage.difficulty === "hard" && <div></div>}
            {/* <DescriptionStageCard
                title={currentStage.title}
                description={currentStage.description}
                steps={currentStage.steps}
            /> */}
            {Number(stageNumber) < currentDungeon.stages.length && (
                <NextStage
                    title={nextStage.title}
                    url={`${dungeonBaseUrl}/stage/${(Number(stageNumber) + 1).toString()}`}
                />
            )}
        </Layout>
    );
};

export default StagePage;
