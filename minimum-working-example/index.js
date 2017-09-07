import Visualizer from 'apl-substrate/components/Visualizer'
import Layer from 'apl-substrate/components/Layer';


class Axes extends Layer {
    requestInit(scene) {
        scene.add(new window.THREE.AxisHelper(5));
    }
}


let V = new Visualizer({
    backgroundColor: new window.THREE.Color(0xffffff),
    startingCameraPosition: [0, 0, -100],
    renderLayers: {
        axis: new Axes(),
    },
    targetElement: "render-target"
});

V.triggerRender();
