import loadJSON from "./loadJSON";
import Model from "./object/Model";
import Sidepanel from "./object/Sidepanel";
import Hotspot from "./object/Hotspot";
import Route from "./object/Route";

function displayModel(id) {
    const json = loadJSON(id);
    if (json) {
        const model = new Model(json);
        document.body.appendChild(model.toHTML());
    }
}

function main() {
    globalThis.defaultRessourcesPath = "default"
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    displayModel(Route.chooseRoute());
}

function closeNav() {
    Sidepanel.hideAllSidepanels();
}


main();