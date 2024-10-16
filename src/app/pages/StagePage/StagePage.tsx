/** @format */

import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
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
import AnswersSummaryCard from "../../components/Organisms/AnswersSummaryCard/AnswersSummaryCard";
import StoryCard from "../../components/Molecules/StoryCard/StoryCard";
import StageFooter from "../../components/Organisms/StageFooter/StageFooter";

const StagePage = () => {
    const { t } = useTranslation();
    const { dungeonCode, stageNumber, universeCode } = useParams();
    const { pathname } = useLocation();
    const [quizIndex, setQuizIndex] = useState(0);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});
    const universes: Array<any> = t("universes", { returnObjects: true });
    const currentUniverse = universes.find((universe) => universe.code === universeCode);
    const currentDungeon = currentUniverse?.dungeons.find((dungeon) => {
        if (dungeon.code === dungeonCode) {
            return true;
        }
    });
    const convertedStageNumber = Number(stageNumber)
    const currentStage = currentDungeon?.stages[convertedStageNumber - 1];
    const universeBaseUrl = `/universe/${universeCode}`;
    const dungeonBaseUrl = `${universeBaseUrl}/dungeon/${dungeonCode}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onSelectAnswer = (event) => {
        setUserAnswers((prev) => {
            const currentQuiz = currentStage.quizs[quizIndex];
            const isCorrectAnswer = currentQuiz.correctAnswer === event.target.value;
            return {
                ...prev,
                [quizIndex]: { isCorrect: isCorrectAnswer, answer: event.target.value },
            };
        });
    };

    const onSubmitAnswer = () => {
        setQuizIndex((prev) => {
            return prev + 1;
        });
    };

    const resetQuiz = () => {
        setQuizIndex(0);
        setUserAnswers({});
    };

    const openSummary = () => {
        setIsSummaryOpen(true);
    };

    const getCurrentStage = () => {
        let stageComponent = <></>;
        switch (currentStage.type) {
            case "story":
                const {
                    story: { title, description },
                } = currentStage;
                stageComponent = (
                    <StoryCard
                        title={title}
                        description={description}
                        id="story-card"
                    />
                );
                break;
            case "tips":
                stageComponent = currentStage.tips?.length > 0 ? <TipsCard tips={currentStage.tips} /> : <></>;
                break;
            case "steps":
                stageComponent = currentStage.steps?.length > 0 ? <StepCards steps={currentStage.steps} /> : <></>;
                break;
            case "quiz":
                const quizLength = currentStage.quizs.length;
                //if it's the end of the quiz
                if (quizIndex === currentStage.quizs.length) {
                    let correctAnswers = 0;
                    Object.entries(userAnswers).forEach(([_, value]: any) => {
                        if (value.isCorrect) {
                            correctAnswers += 1;
                        }
                    });
                    stageComponent = isSummaryOpen ? (
                        <AnswersSummaryCard
                            questions={currentStage.quizs}
                            answers={userAnswers}
                            onClickRetry={resetQuiz}
                        />
                    ) : (
                        <ScoreCard
                            score={correctAnswers}
                            questionsLength={quizLength}
                            onClickRetry={resetQuiz}
                            onClickCheckResults={openSummary}
                        />
                    );
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
                            isButtonDisabled={!!!userAnswers[quizIndex]}
                        />
                    );
                }
                break;
            case "timebox":
                stageComponent = (
                    <TimeBoxCard
                        title={currentStage.title}
                        description={currentStage.description}
                        universeCode={currentUniverse.code}
                        timeBoxKey={`timebox-${stageNumber}`}
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
                        displayPasteStage={currentStage.type === "story"}
                    />
                </div>
                <div
                    className="stage-description-container"
                    id="overflow-stage"
                >
                    {getCurrentStage()}
                </div>
            </TwoColumnsGrid>
            {currentStage.difficulty === "hard" && <div></div>}
            <StageFooter
                dungeonBaseUrl={dungeonBaseUrl}
                stages={currentDungeon.stages}
                currentStageNumber={convertedStageNumber}
            />
        </Layout>
    );
};

export default StagePage;
