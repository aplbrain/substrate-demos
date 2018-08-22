import Visualizer from 'apl-substrate/components/Visualizer'
import AxisLayer from 'apl-substrate/components/layers/AxisLayer';


let V = new Visualizer({
    renderLayers: {
        axis: new AxisLayer(),
    },
    targetElement: "render-target",
    // Start with width and height of 500px:
    width: 500,
    height: 500
});

V.triggerRender();

window.addEventListener('keyup', ev => {
    // Resize the visualizer to a random size:
    V.resize(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
    );
});


window.V = V;
