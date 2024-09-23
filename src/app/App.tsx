/** @format */

import "./styles/ui.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
    const [onBoardingDone, setOnBoardingDone] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.onmessage = (event) => {
            if (event?.data?.pluginMessage) {
                const { type, onBoardingDone } = event.data.pluginMessage;
                if (type === "onboarding-status") {
                    setOnBoardingDone(onBoardingDone);
                }
            }
        };
    }, []);

    useEffect(() => {
        if (onBoardingDone === null) return;
        if (!onBoardingDone) {
            navigate("/onboarding/home");
        } else {
            navigate("/home");
        }
    }, [onBoardingDone]);

    return <></>;
}

export default App;
