export const onBoardingbuttonsConfig = {
  page_1: (t, navigate) => {
    const button = [
      {
        label: t('onboarding.page_1.button_1'),
        onClick: () => {
          navigate('/onboarding/2');
        },
      },
    ];
    return button;
  },
  page_2: (t, navigate) => {
    const buttons = [
      {
        label: t('onboarding.page_2.button_1'),
        onClick: () => {
          navigate('/onboarding/3');
        },
      },
      {
        label: t('onboarding.page_2.button_2'),
        onClick: () => {
          navigate('/home');
        },
        outline: true
      },
    ];
    return buttons;
  },
  page_3: (t,navigate) => {
    const buttons = [      {
        label: t('onboarding.page_3.button_1'),
        onClick: () => {
          navigate('/home');
        },
      }]
      return buttons;
  }
};
