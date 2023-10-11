import { useTranslation } from 'react-i18next';
import DungeonCard from '../DungeonCard/DungeonCard';
import Bem from '../../../helpers/Bem';
import "./DungeonCards.style.scss";

const DungeonCards = ({ dungeons, universCode }) => {
  const { t } = useTranslation();
  const b = Bem('dungeon-cards');

  return (
    <div className={b()}>
      <h2 className={b("title")}>{t('dungeonsLabel')}</h2>
      <div className={b('container')}>
        {dungeons.map((dungeon, index) => {
          return <DungeonCard key={`${dungeon.code}-${index}`} {...dungeon} dungeonCode={dungeon.code} universCode={universCode} />;
        })}
      </div>
    </div>
  );
};

export default DungeonCards;
