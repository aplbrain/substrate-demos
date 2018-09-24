import Visualizer from 'apl-substrate/components/Visualizer';
import AxisLayer from 'apl-substrate/components/layers/AxisLayer';
import MeshLayer from 'apl-substrate/components/layers/MeshLayer';


let V = new Visualizer({
    renderLayers: {
        axis: new AxisLayer(),          // This layer doesn't go anywhere
        sphere: new MeshLayer({
            data: `\
            v 0 0 0
            v 0 0 1
            v 0 1 0
            v 1 1 0
            f 1 2 3
            f 2 3 4`
        }),      // This layer can be made visible and invisible
    },
    targetElement: "render-target"
});


V.triggerRender();
window.V = V;


window.addEventListener('keyup', function() {
    window.V.renderLayers['sphere'].toggleVisibility();
});
