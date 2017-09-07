import Visualizer from 'apl-substrate/components/Visualizer'
import Layer from 'apl-substrate/components/Layer';


class Axes extends Layer {
    requestInit(scene) {
        scene.add(new window.THREE.AxisHelper(5));
    }
}


let V = new Visualizer({
    renderLayers: {
        axis: new Axes(),
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
