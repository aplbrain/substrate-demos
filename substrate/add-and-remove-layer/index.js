import Visualizer from 'apl-substrate/components/Visualizer'
import Layer from 'apl-substrate/components/Layer';

class Axes extends Layer {
    requestInit(scene) {
        scene.add(new window.THREE.AxisHelper(5));
    }
}

class Lighting extends Layer {
    requestInit(scene) {
        var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
    }
}


class SphereLayer extends Layer {
    requestInit(scene) {
        // Notice that the color changes every time the layer is re-added
        // because the randomization takes place here:
        let color = Math.random() * 0xffffff;
        this.s = new window.THREE.Mesh(
            new window.THREE.SphereGeometry(2, 32, 32),
            new window.THREE.MeshLambertMaterial({ color })
        );
        scene.add(this.s);
    }

    clearChildren(scene) {
        /*
        This function must be implemented in any layer that will be removed.
        */
        console.log(this.s)
        scene.remove(this.s);
    }
}


let V = new Visualizer({
    renderLayers: {
        axis: new Axes(),           // This layer doesn't go anywhere`
        light: new Lighting(),      // This layer doesn't go anywhere
        sphere: new SphereLayer(),  // This layer can be deleted and re-added
    },
    targetElement: "render-target"
});

V.triggerRender();


window.V = V;


window.addEventListener('keyup', function() {
    if (V.renderLayers.sphere) {
        V.removeLayer('sphere');
    } else {
        V.addLayer('sphere', new SphereLayer())
    }
})
