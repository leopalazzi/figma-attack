export const onBoardingbuttonsConfig = {
  step_1: (t, navigate) => {
    const button = [
      {
        label: t('onboarding.step_1.button_1'),
        onClick: () => {
          navigate('/onboarding/2');
        },
      },
    ];
    return button;
  },
  step_2: (t, navigate) => {
    const buttons = [
      {
        label: t('onboarding.step_2.button_1'),
        onClick: () => {
          navigate('/onboarding/3');
        },
      }
    ];
    return buttons;
  },
  step_3: (t,navigate) => {
    const buttons = [      {
        label: t('onboarding.step_4.button_1'),
        onClick: () => {
          navigate('/onboarding/4');
        },
      }]
      return buttons;
  },
  step_4: (t,navigate) => {
    const buttons = [      {
        label: t('onboarding.step_4.button_1'),
        onClick: () => {
          parent.postMessage({ pluginMessage: { type: 'onboarding-done'} }, '*');
          navigate('/recommandation');
        },
      }]
      return buttons;
  }
};
