import Visualizer from 'apl-substrate/components/Visualizer'
import VolumeLayer from 'apl-substrate/components/layers/VolumeLayer';
import AxisLayer from 'apl-substrate/components/layers/AxisLayer';
import LightingLayer from 'apl-substrate/components/layers/LightingLayer';

import * as THREE from 'three';

// import em from "./data.json";

let x = 300;
let y = 300;
let z = 300;


let V = new Visualizer({
    renderLayers: {
        ax: new AxisLayer(),
        vol: new VolumeLayer({
            data: [...Array(x * y * z)].map((i, j) => 1),
            mask: [...Array(x * y * z)].map((i, j) => j%2==0),
            // data: [...Array(x * y * z)].map((i, j) => Math.random() * j/(x * y * z)),
            shape: [x, y, z],
            scale: {x: 0.5, y: 0.5, z: 0.5}
        }),
        // vol: new VolumeLayer({
        //     data: em.data,
        //     mask: em.data.map(i => i < 0.45),
        //     shape: em.shape,
        //     scale: {x: 0.25, y: 0.25, z: 0.25}
        // }),
        // vol2: new VolumeLayer({
        //     data: em.data.map(i => [i, .5, i]),
        //     mask: em.data.map(i => i > 0.45),
        //     shape: em.shape,
        //     scale: {x: 0.25, y: 0.25, z: 0.25}
        // }),
        lights: new LightingLayer()
    },
    targetElement: "render-target"
});

V.triggerRender();
