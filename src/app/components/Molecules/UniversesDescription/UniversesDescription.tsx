import { FunctionComponent } from 'react';
import Bem from '../../../helpers/Bem';
import "./UniversesDescription.style.scss";

export const UniversesDescription: FunctionComponent<any> = () => {
  const b = Bem('universes-description');

  return (
    <div className={b('container')}>
      <h2 className={b("title")}>Choose your universe</h2>
      <span className={b("text")}>Universes are the point to start</span>
    </div>
  );
};

export default UniversesDescription;
