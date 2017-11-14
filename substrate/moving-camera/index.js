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


window.addEventListener('keydown', ev => {
    // Get the current position:
    let pos = V.camera.position;

    if (ev.key === "w") {
        V.camera.position.set(pos.x + 1, pos.y, pos.z);
    } else if (ev.key === "s") {
        V.camera.position.set(pos.x - 1, pos.y, pos.z);
    } else if (ev.key === "a") {
        V.camera.position.set(pos.x, pos.y - 1, pos.z);
    } else if (ev.key === "d") {
        V.camera.position.set(pos.x, pos.y + 1, pos.z);
    } else if (ev.key === "q") {
        V.camera.position.set(pos.x, pos.y, pos.z + 1);
    } else if (ev.key === "z") {
        V.camera.position.set(pos.x, pos.y, pos.z - 1);
    }

    console.log(pos);

    if (ev.key === "1") {
        // Front-view:
        V.camera.position.set(pos.length(), 0, 0);
    } else if (ev.key === "3") {
        // Side view:
        V.camera.position.set(0, pos.length(), 0);
    } else if (ev.key === "7") {
        // Top view:
        V.camera.position.set(0, 0, pos.length());
    }
});

window.V = V;
