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
    width: 500,
    height: 500
});

V.triggerRender();


window.V = V;
