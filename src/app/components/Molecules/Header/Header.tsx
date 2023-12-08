import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import './Header.style.scss';

const Header = () => {
  const b = Bem('header');
  const { t } = useTranslation();


  return (
    <header className={b('container')}>
      <span className={b('label')}>{t('nextStageLabel')}</span>
    </header>
  );
};

export default Header;
