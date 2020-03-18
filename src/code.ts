// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).

import chroma from '../node_modules/chroma-js/chroma'
import clone from './clone'

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

figma.ui.onmessage = msg => {

  if (msg.type === 'generate') {

    for (const node of figma.currentPage.selection) {

      if ("fills" in node) {
        
        // Get the current fills in order to clone and modify them
        const fills = clone(node.fills);

        // Get a random colour from chroma-js.
        const random = chroma.random().gl();

        // Create an array that matches the fill structure (rgb represented as 0 to 1)
        const values = {r: random[0], g: random[1], b: random[2]};
        
        // Note: Needs to be on the first fill
        // TODO: Can we remove all fills?
        fills[0].color = values;
        node.fills = fills;
      }
    }
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
