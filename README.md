# Random Color Generator
A Figma plugin that uses chroma-js under the hood to apply random colors to a selection.

## Limitations
- Currently this only works on fills.
- If you select a vector path or line then it will add a fill which won't be displayed as they use strokes.

## Build instructions
First clone the repository and install the dev dependencies:

```
git clone git@github.com:craigmdennis/figma-random-color.git
cd figma-random-color
npm install
```

Then compile the source files:

```
npm run watch
```

The main plugin code is in `src/code.ts`. The HTML for the UI is in
`src/ui.html`, while the embedded JavaScript is in `src/ui.ts`.

These are compiled to files in `dist/`, which are what Figma will use to run
your plugin.
