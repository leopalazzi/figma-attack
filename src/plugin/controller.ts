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

// Easing function (ease-out cubic)
function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
}

function easeIn(t) {
    return Math.pow(t, 3);  // Ease-in cubic formula
}
const totalSteps = 100; // Number of steps for smoothness
const duration = 150; // Total duration in ms (adjust as needed)
const sleepTime = duration / totalSteps;

const totalStepsUniminify = 80; // Number of steps for smoothness

const durationUnminify = 50; // Total duration in ms (adjust as needed)
const sleepTimeUnimify = duration / totalStepsUniminify;

figma.ui.onmessage = async (msg) => {
    switch (msg.type) {
        case "check-onboarding":
            const onBoardingDone = await figma.clientStorage.getAsync("onBoardingDone");
            figma.ui.postMessage({
                type: "onboarding-status",
                onBoardingDone: !!onBoardingDone
            });
            break;
        case "onboarding-done":
            figma.clientStorage.setAsync("onBoardingDone", true);
            break;
        case "onboarding-undone":
            figma.clientStorage.setAsync("onBoardingDone", false);
            break;
        case "minify-plugin":

            for (let step = 0; step <= totalSteps; step++) {
                const progress = step / totalSteps;
                const easedProgress = easeOut(progress);

                // Apply easing to width and height
                const currentWidth = WIDTH_PLUGIN - (WIDTH_PLUGIN - WIDTH_MINIFY_PLUGIN) * easedProgress;
                const currentHeight = HEIGHT_PLUGIN - (HEIGHT_PLUGIN - HEIGHT_MINIFY_PLUGIN) * easedProgress;

                figma.ui.resize(Math.round(currentWidth), Math.round(currentHeight));

                // Pause for a small amount of time to create the animation effect
                await sleep(sleepTime);
            }
            // const adjustWidth= Math.round(STEP_RESIZE*1.2);
            // let widthPlugin = WIDTH_PLUGIN;
            // for(let i=HEIGHT_PLUGIN; i > HEIGHT_MINIFY_PLUGIN; i-=STEP_RESIZE)
            // {
            //     widthPlugin -= adjustWidth;
            //     figma.ui.resize(widthPlugin, i);
            //     await sleep(8);
            // }
            figma.ui.resize(WIDTH_MINIFY_PLUGIN, HEIGHT_MINIFY_PLUGIN);
            break;
        case "unminify-plugin":
            for (let step = 0; step <= totalStepsUniminify; step++) {
                const progress = step / totalStepsUniminify;
                const easedProgress = easeIn(progress);
            
                // Apply easing to width and height as we unminify
                const currentWidth = WIDTH_MINIFY_PLUGIN + (WIDTH_PLUGIN - WIDTH_MINIFY_PLUGIN) * easedProgress;
                const currentHeight = HEIGHT_MINIFY_PLUGIN + (HEIGHT_PLUGIN - HEIGHT_MINIFY_PLUGIN) * easedProgress;
            
                figma.ui.resize(Math.round(currentWidth), Math.round(currentHeight));
            
                // Pause for a small amount of time to create the animation effect
                await sleep(sleepTimeUnimify);
            }
            // const adjustWidthMinify = Math.round(STEP_RESIZE*1.2);
            // let widthPluginMinify = WIDTH_MINIFY_PLUGIN;
            // for(let i=HEIGHT_MINIFY_PLUGIN; i < HEIGHT_PLUGIN; i+=STEP_RESIZE)
            // {
            //     widthPluginMinify += adjustWidthMinify;
            //     figma.ui.resize(widthPluginMinify, i);
            //     await sleep(8);
            // }
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
