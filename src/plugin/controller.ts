figma.showUI(__html__, { width: 1024, height: 860 });

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
      const onBoardingDone = await figma.clientStorage.getAsync('onBoardingDone');
      figma.ui.postMessage({
        type: 'onboarding-status',
        onBoardingDone: !!onBoardingDone,
        // onBoardingDone: false
      });
      break;
    case 'onboarding-done':
      figma.clientStorage.setAsync('onBoardingDone', true);
      break;
    case 'onboarding-undone':
      figma.clientStorage.setAsync('onBoardingDone', false);
      break;
    case 'resize':
      // if(msg.size.w >= 800)
      // {
      //   figma.ui.resize(msg.size.w, msg.size.h);
      //   figma.clientStorage.setAsync('size', msg.size).catch((err) => {
      //     console.error(err);
      //   });
      // }
      break;
    case 'paste-stage':
      const rect = figma.createRectangle();
      const { imageData } = msg;
      const img = figma.createImage(imageData);
      const { width, height } = await img.getSizeAsync();
      rect.resize(width, height);

      rect.fills = [
        {
          type: 'IMAGE',
          imageHash: img.hash,
          scaleMode: 'FILL',
        },
      ];
      figma.currentPage.appendChild(rect);
      const nodes = [rect];

      figma.viewport.scrollAndZoomIntoView(nodes);
      break;
    default:
      break;
  }

  // figma.closePlugin();
};
