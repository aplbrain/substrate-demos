import Visualizer from 'apl-substrate/components/Visualizer'
import MeshLayer from 'apl-substrate/components/layers/MeshLayer';
import LightingLayer from 'apl-substrate/components/layers/LightingLayer';

import * as THREE from 'three';


/*
Render two teapots: A mommy teapot and a baby teapot.
*/

let V = new Visualizer({
    renderLayers: {
        // Mommy teapot.
        teapot: new MeshLayer({
            path: "/teapot.obj",
            material: new THREE.MeshPhongMaterial({
                color: new THREE.Color(20, 50, 90)
            })
        }),
        babyTeapot: new MeshLayer({
            path: "/teapot.obj",
            // We omit the `material` key, so one will be set for us.
            // We can specify origin and scale manually.
            origin: {x: 5, y: 0, z: 0},
            scale: {x: 0.5, y: 0.5, z: 0.5}
        }),
        // Let's render a table by manually entering an OBJ string.
        // Note that the smarter way to do this is with a plane layer.
        table: new MeshLayer({
            data: `#
                v -8 0 -8
                v 8 0 -8
                v 8 0 8
                v -8 0 8
                f 1 2 3 4
            `
        }),
        lights: new LightingLayer()
    },
    targetElement: "render-target"
});

V.triggerRender();
