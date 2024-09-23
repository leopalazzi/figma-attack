/** @format */

import { useEffect, useState } from "react";
import { AppContext } from "./store/appContext";
import App from "./App";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Home from "./pages/Home/Home";
import UniversePage from "./pages/UniversePage/UniversePage";
import DungeonPage from "./pages/DungeonPage/DungeonPage";
import StagePage from "./pages/StagePage/StagePage";
import KnowledgeTemple from "./pages/KnowledgeTemple/KnowledgeTemple";
import Basement from "./pages/Basement/Basement";
import MinifyPage from "./pages/MinifyPage/MinifyPage";
import UniverseRecommandation from "./pages/UniverseRecommandation/UniverseRecommandation";
import HomeOnBoarding from "./pages/HomeOnBoarding/HomeOnBoarding";

const RouteWrapper = ({ handleRouteChange }) => {
    const location = useLocation(); // To track the current route

    // Trigger the route change logic when location changes
    useEffect(() => {
        handleRouteChange(location.pathname); // Call the function with the new path
    }, [location, handleRouteChange]); // Trigger the effect whenever the location changes

    return (
        <Routes>
            <Route
                path="/"
                element={<App />}
            />
            <Route
                path="/home"
                element={<Home />}
            />
            <Route
                path="/onboarding/home"
                element={<HomeOnBoarding />}
            />
            <Route
                path="/onboarding/:id"
                element={<OnBoarding />}
            />
            <Route
                path="/universe/:code"
                element={<UniversePage />}
            />
            <Route
                path="/universe/:universeCode/dungeon/:code"
                element={<DungeonPage />}
            />
            <Route
                path="/universe/:universeCode/dungeon/:dungeonCode/stage/:stageNumber"
                element={<StagePage />}
            />
            <Route
                path="/basement"
                element={<Basement />}
            />
            <Route
                path="/knowledges"
                element={<KnowledgeTemple />}
            />
            <Route
                path="/minify"
                element={<MinifyPage />}
            />
            <Route
                path="/recommandation"
                element={<UniverseRecommandation />}
            />
        </Routes>
    );
};

export const CtxApp = () => {
    const [activePage, setActivePage] = useState("universes");
    const [currentPagePath, setCurrentPagePath] = useState("");
    const [onBoardingAnswers, setOnBoardingAnswers] = useState({});

    const handleRouteChange = (path) => {
        if (path !== "/minify") {
            setCurrentPagePath(path);
        }
    };

    return (
        <AppContext.Provider
            value={{
                activePage: activePage,
                setActivePage: setActivePage,
                currentPagePath: currentPagePath,
                setCurrentPagePath: setCurrentPagePath,
                onBoardingAnswers: onBoardingAnswers,
                setOnBoardingAnswers: setOnBoardingAnswers,
            }}
        >
            <MemoryRouter>
                <RouteWrapper handleRouteChange={handleRouteChange} />
            </MemoryRouter>
        </AppContext.Provider>
    );
};

export default CtxApp;
