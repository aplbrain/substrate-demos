# Substrate Demos

Some demo files for the [open-source Substrate package](https://github.com/jhuapl-boss/substrate).

```
npm install --save apl-substrate
```

For each demo, you will need to pack the index into a bundle using webpack. You can do this either by running `webpack index.js bundle.js` or `npm run webpack`, which will do this for you. In either case, you will need to have webpack installed: `npm install -g webpack`.

## Table of Contents

| Folder | Description |
|--------|-------------|
| [add-and-remove-layer](add-and-remove-layer) | This example demonstrates how to add and remove a layer from a Visualizer after the Visualizer has rendered. |
| [changing-container-size](changing-container-size) | This example demonstrates the use of the `Visualizer#resize` function, which can take 0, 1, or 2 arguments. |
| [minimum-working-example](minimum-working-example) | This example is all you need to get started with Substrate. |
| [moving-camera](moving-camera) | This example demonstrates programmatically moving a camera using the WS/AD/QZ keys, or 1/3/7 keys to snap to cardinal axes. |
