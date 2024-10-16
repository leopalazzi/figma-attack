/** @format */

import { useState, useEffect } from "react";
import Bem from "../../../helpers/Bem";
import PlayIcon from "../../../icons/PlayIcon/PlayIcon";
import "./TimeBox.style.scss";
import ReplayIcon from "../../../icons/ReplayIcon/ReplayIcon";
import StopIcon from "../../../icons/StopIcon/StopIcon";
import DiscordIcon from "../../../icons/DiscordIcon/DiscordIcon";
import ActionButton from "../../Atoms/ActionButton/ActionButton";
import { universesCode } from "../../../config/config";

const getTimerByUniverse = (universeCode) => {
    let timer: number = 60 * 10;
    switch (universeCode) {
        case universesCode.neophyteNexus:
            timer = 60 * 10;
            break;
        case universesCode.craftmenCrossing:
            timer = 60 * 8;
            break;
        case universesCode.masterMetropolis:
            timer = 60 * 5;
            break;
        default:
            break;
    }
    return timer;
};

const TimeBox = ({ universeCode, keyValue }) => {
    const b = Bem("timebox");
    const TIMER = getTimerByUniverse(universeCode);
    const [time, setTime] = useState(TIMER);
    const [isRunning, setIsRunning] = useState(false);
    const [currentState, setCurrentState] = useState("start");

    useEffect(() => {
        setTime(TIMER);
        setCurrentState("start");
    }, [keyValue, universeCode]);

    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning, time]);

    useEffect(() => {
        if (time === 0) {
            setCurrentState("restart");
        }
    }, [time]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(remainingSeconds).padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const handleStart = () => {
        setIsRunning(true);
        setCurrentState("stop");
    };

    const handleStop = () => {
        setIsRunning(false);
        setCurrentState("restart");
    };

    const handleRestart = () => {
        setIsRunning(false);
        setCurrentState("start");
        setTime(TIMER);
    };

    const renderIcon = () => {
        switch (currentState) {
            case "start":
                return (
                    <button
                        className={b("button")}
                        onClick={handleStart}
                    >
                        <PlayIcon />
                    </button>
                );
            case "stop":
                return (
                    <button
                        className={b("button")}
                        onClick={handleStop}
                    >
                        <StopIcon />
                    </button>
                );
            case "restart":
                return (
                    <button
                        className={b("button")}
                        onClick={handleRestart}
                    >
                        <ReplayIcon />
                    </button>
                );
            default:
                return null;
        }
    };

    return (
        <div
            className={b("container")}
            key={keyValue}
        >
            <div className={b("time-container")}>
                {renderIcon()}
                <div className={b("loader", { running: isRunning && time !== 0, ended: time === 0 })}>
                    <span className={b("time")}>{formatTime(time)}</span>
                </div>
            </div>
            {time === 0 && (
                <div className={b("success-container")}>
                    <span className={b("success-text")}>Nice ! Did you succeed ?</span>
                    <ActionButton
                        icon={<DiscordIcon />}
                        label="Share in Discord"
                        outline={true}
                    />
                </div>
            )}
        </div>
    );
};

export default TimeBox;
