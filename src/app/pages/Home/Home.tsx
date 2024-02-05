import { useTranslation } from 'react-i18next';
import UniverseCards from '../../components/Organisms/UniverseCards/UniverseCards';
import Quiz from '../../components/Molecules/Quiz/Quiz';
import TimeBox from '../../components/Molecules/TimeBox/TimeBox';

const Home = () => {
  const { t } = useTranslation();
  const universes: Array<any> = t('universes', { returnObjects: true });
  const onBoarding: Array<any> = t('onboarding', { returnObjects: true });

  return (
    <div>
      <TimeBox/>
      <Quiz title="test" answers={onBoarding["page_1"].quiz.answers}/>
      <UniverseCards universes={universes} type="vertical" />
    </div>
  );
};

export default Home;
