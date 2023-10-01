import { createRoot } from 'react-dom/client';
import './i18n';

import App from './components/App';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import Home from './pages/Home/Home';
import UniversePage from './pages/UniversePage/UniversePage';
import DungeonPage from './pages/DungeonPage/DungeonPage';
import StagePage from './pages/StagePage/StagePage';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  root.render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/onboarding/:id" element={<OnBoarding />} />
        <Route path="/universe/:code" element={<UniversePage />} />
        <Route path="/universe/:universeCode/dungeon/:code" element={<DungeonPage />} />
        <Route path="/universe/:universeCode/dungeon/:dungeonCode/stage/:stageNumber" element={<StagePage />} />
      </Routes>
    </MemoryRouter>
  );
});
