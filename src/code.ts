import chroma from '../node_modules/chroma-js/chroma'
import clone from './clone'

for (const node of figma.currentPage.selection) {

  if ("fills" in node) {

    // Get the current fills in order to clone and modify them
    const fills = clone(node.fills);
    
    // If there are no fills then create an object to matche what would have been clonsed
    if (Array.isArray(node.fills) && !node.fills.length) {
      fills.push({type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: {}})
    }

    // Get a random colour from chroma-js.
    const random = chroma.random().gl();

    // Create an array that matches the fill structure (rgb represented as 0 to 1)
    const newColor = {r: random[0], g: random[1], b: random[2]};
    
    // Only change the first fill
    fills[0].color = newColor;

    // Replace the fills on the node.
    node.fills = fills;

  }
}

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
