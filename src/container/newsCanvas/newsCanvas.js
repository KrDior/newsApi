import defaultConfig from '../../defaultConfig';

export default function createCanvas() {
    const mainCanvas = document.createElement('div');
    mainCanvas.classList.add(defaultConfig.classNames.mainCanvas.canvas1,
        defaultConfig.classNames.mainCanvas.canvas2,
        defaultConfig.classNames.mainCanvas.canvas3);

    const container = document.createElement('div');
    container.classList.add(defaultConfig.classNames.mainCanvas.container);
    container.id = defaultConfig.classNames.mainCanvas.containerId;

    mainCanvas.appendChild(container);
    return mainCanvas;
}
