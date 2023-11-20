import { useTranslation } from 'react-i18next';
import './UniverseCards.style.scss';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import { FunctionComponent } from 'react';
import { UniverseCardsProps } from './UniverseCards.model';

const UniverseCards: FunctionComponent<UniverseCardsProps> = ({ universes, type, cardCustomClassName }) => {
  const { t } = useTranslation();

  return (
    <div className={`universe-cards-${type}`}>
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
            customClassName={cardCustomClassName}
          />
        );
      })}
    </div>
  );
};

export default UniverseCards;
