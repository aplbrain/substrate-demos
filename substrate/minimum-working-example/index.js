import Visualizer from 'apl-substrate/components/Visualizer'
import AxisLayer from 'apl-substrate/components/layers/AxisLayer';

import * as THREE from 'three';


let V = new Visualizer({
    renderLayers: {
        axis: new AxisLayer(),
    },
    targetElement: "render-target"
});

V.triggerRender();
