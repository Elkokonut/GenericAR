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
    displayModel(Route.chooseRoute());
}

function closeNav() {
    Sidepanel.hideAllSidepanels();
}


main();