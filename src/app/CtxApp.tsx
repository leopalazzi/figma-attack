import { useState } from 'react';
import { AppContext } from './store/appContext';
import App from './App';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import Home from './pages/Home/Home';
import UniversePage from './pages/UniversePage/UniversePage';
import DungeonPage from './pages/DungeonPage/DungeonPage';
import StagePage from './pages/StagePage/StagePage';
import KnowledgeTemple from './pages/KnowledgeTemple/KnowledgeTemple';
import Basement from './pages/Basement/Basement';
import MinifyPage from './pages/MinifyPage/MinifyPage';
import UniverseRecommandation from './pages/UniverseRecommandation/UniverseRecommandation';

export const CtxApp = () => {
  const [activePage, setActivePage] = useState('universes');
  const [onBoardingAnswers, setOnBoardingAnswers] = useState({});

  return (
    <AppContext.Provider
      value={{
        activePage: activePage,
        setActivePage: setActivePage,
        onBoardingAnswers: onBoardingAnswers,
        setOnBoardingAnswers: setOnBoardingAnswers
      }}
    >
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/onboarding/:id" element={<OnBoarding/>} />
          <Route path="/universe/:code" element={<UniversePage />} />
          <Route path="/universe/:universeCode/dungeon/:code" element={<DungeonPage />} />
          <Route path="/universe/:universeCode/dungeon/:dungeonCode/stage/:stageNumber" element={<StagePage />} />
          <Route path="/basement" element={<Basement/>} />
          <Route path="/knowledges" element={<KnowledgeTemple />} />
          <Route path="/minify" element={<MinifyPage/>} />
          <Route path="/recommandation" element={<UniverseRecommandation/>} />
        </Routes>
      </MemoryRouter>
    </AppContext.Provider>
  );
};

export default CtxApp;
