import Visualizer from 'apl-substrate/components/Visualizer'
import Layer from 'apl-substrate/components/Layer';
import AxisLayer from 'apl-substrate/components/layers/AxisLayer';

import * as THREE from 'three';

class LightingLayer extends Layer {
    /*
    Classic three-point lighting scheme, as a substrate layer.
    */

    requestInit(scene) {
        let self = this;
        // Key
        let key = new THREE.PointLight(0xfff, 2, 100);
        key.position.set(5, 5, 5);
        self.children.push(scene.add(key));
        // Fill
        let fill = new THREE.PointLight(0xccc, 0.6, 100);
        fill.position.set(5, -5, 4);
        self.children.push(scene.add(fill));
        // Back
        let back = new THREE.PointLight(0xffeedd, 0.4, 100);
        back.position.set(-5, 5, 3);
        self.children.push(scene.add(back));
    }
}

class SphereLayer extends Layer {
    requestInit(scene) {
        // Notice that the color changes every time the layer is re-added
        // because the randomization takes place here:
        let color = Math.random() * 0xffffff;
        this.s = new THREE.Mesh(
            new THREE.SphereGeometry(Math.random() * 2 + 2, 32, 32),
            new THREE.MeshLambertMaterial({ color })
        );
        scene.add(this.s);
    }

    clearChildren(scene) {
        /*
        This function must be implemented in any layer that will be removed.
        */
        scene.remove(this.s);
    }
}


let V = new Visualizer({
    renderLayers: {
        axis: new AxisLayer(),          // This layer doesn't go anywhere
        light: new LightingLayer(),     // This layer doesn't go anywhere
        sphere: new SphereLayer(),      // This layer can be deleted and re-added
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
});
