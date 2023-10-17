import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import './UniverseCards.style.scss';
import HorizontalCard from '../HorizontalCard/HorizontalCard';

const UniverseCards = ({ universes }) => {
  const { t } = useTranslation();
  const b = Bem('universe-cards');

  return (
    <div className={b()}>
      {universes.map((universe) => {
        const numberDungeons = universe.dungeons.length;
        const numberSideQuests = universe.side_quests.length;
        const badgesData = [
          { label: universe.level },
          {
            universe: universe.code,
            label: `${numberDungeons} ${t('dungeonsLabel')}`,
          },
          {
            universe: universe.code,
            label: `${numberSideQuests} ${t('sideQuestsLabel')}`,
          },
        ];
        return (
          <HorizontalCard
            key={universe.code}
            title={universe.title}
            universCode={universe.code}
            badgesData={badgesData}
            activateClick={true}
          />
        );
      })}
    </div>
  );
};

export default UniverseCards;
