/** @format */
const HEIGHT_PLUGIN = 860;
const WIDTH_PLUGIN = 1024;
const HEIGHT_MINIFY_PLUGIN = 132;
const WIDTH_MINIFY_PLUGIN = 132;
const STEP_RESIZE = 30;

figma.showUI(__html__, { width: WIDTH_PLUGIN, height: HEIGHT_PLUGIN });
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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
        case "check-onboarding":
            const onBoardingDone = await figma.clientStorage.getAsync("onBoardingDone");
            figma.ui.postMessage({
                type: "onboarding-status",
                onBoardingDone: !!onBoardingDone,
            });
            break;
        case "onboarding-done":
            figma.clientStorage.setAsync("onBoardingDone", true);
            break;
        case "onboarding-undone":
            figma.clientStorage.setAsync("onBoardingDone", false);
            break;
        case "minify-plugin":
            const adjustWidth= Math.round(STEP_RESIZE*1.2);
            let widthPlugin = WIDTH_PLUGIN;
            for(let i=HEIGHT_PLUGIN; i > HEIGHT_MINIFY_PLUGIN; i-=STEP_RESIZE)
            {
                widthPlugin -= adjustWidth;
                figma.ui.resize(widthPlugin, i);
                await sleep(8);
            }
            figma.ui.resize(WIDTH_MINIFY_PLUGIN, HEIGHT_MINIFY_PLUGIN);
            break;
        case "unminify-plugin":
                const adjustWidthMinify = Math.round(STEP_RESIZE*1.2);
                let widthPluginMinify = WIDTH_MINIFY_PLUGIN;
                for(let i=HEIGHT_MINIFY_PLUGIN; i < HEIGHT_PLUGIN; i+=STEP_RESIZE)
                {
                    widthPluginMinify += adjustWidthMinify;
                    figma.ui.resize(widthPluginMinify, i);
                    await sleep(8);
                }
                figma.ui.resize(WIDTH_PLUGIN, HEIGHT_PLUGIN);
                break;
        case "paste-stage":
            const rect = figma.createRectangle();
            const { imageData } = msg;
            const img = figma.createImage(imageData);
            const { width, height } = await img.getSizeAsync();
            rect.resize(width, height);

            rect.fills = [
                {
                    type: "IMAGE",
                    imageHash: img.hash,
                    scaleMode: "FILL",
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
