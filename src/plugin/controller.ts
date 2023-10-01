figma.showUI(__html__, { width: 1511, height: 863 });

// figma.clientStorage
//   .getAsync('size')
//   .then((size) => {
//     if (size)
//     {
//       figma.ui.resize(size.w, size.h);
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case 'check-onboarding':
      const onBoardingStatus = await figma.clientStorage.getAsync('onBoardingStatus');
      figma.ui.postMessage({
        type: 'onboarding-status',
        onBoardingStatus: !!onBoardingStatus,
      });
      break;
    case 'onboarding-done':
      figma.clientStorage.setAsync('onBoardingStatus', false);
      break;
    case 'resize':
      if(msg.size.w >= 800)
      {
        figma.ui.resize(msg.size.w, msg.size.h);
        figma.clientStorage.setAsync('size', msg.size).catch((err) => {
          console.error(err);
        });
      }
      break;
    default:
      break;
  }

  // figma.closePlugin();
};
