import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import './NavBar.style.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../store/appContext';

const NavBar = () => {
  const { setActivePage, activePage } = useContext(AppContext);
  const b = Bem('navbar');
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={b('container')}>
      <button className={b('button', { active: activePage === 'basement' })} onClick={()=>{
        setActivePage("basement");
        navigate("/basement");
      }}>{t('basementLabel')}</button>
      <button className={b('button', { active: activePage === 'universes' })} onClick={()=>{
                setActivePage("universes");
                navigate("/home");
      }}>{t('universesLabel')}</button>
      <button className={b('button', { active: activePage === 'knowledges' })} onClick={()=>{
                setActivePage("knowledges");
                navigate("/knowledges");
      }}>{t('knowledgeLabel')}</button>
    </div>
  );
};

export default NavBar;
