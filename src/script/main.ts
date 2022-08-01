import loadJSON from "./loadJSON";
import Model from "./object/Model";
import Sidepanel from "./object/Sidepanel";
import Hotspot from "./object/Hotspot";


function getId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id')
}

function hasId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('id')
}

function defaultBehavior() {
    const json = loadJSON();
    const model = new Model(json);
    document.body.appendChild(model.toHTML());
}


function main() {
    globalThis.defaultRessourcesPath = "default/ressources/"
    if (hasId())
        console.log(getId());
    else
        defaultBehavior();
}

function closeNav() {
    Sidepanel.hideAllSidepanels();
}


main();