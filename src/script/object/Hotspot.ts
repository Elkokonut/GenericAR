import Sidepanel from "./Sidepanel";
import Vector3 from "./Vector3";

export default class Hotspot {
    static counter = 0;
    label?: string;
    position: Vector3;
    normal?: Vector3;
    orbit?: Vector3;
    target?: Vector3;
    content?: string;
    slot: number;

    constructor(
        position: Vector3,
        normal?: Vector3,
        orbit?: Vector3,
        target?: Vector3,
        label?: string,
        content?: string) {
        this.position = position;
        this.normal = normal;
        this.label = label;
        this.orbit = orbit;
        this.target = target;
        this.slot = Hotspot.counter++;
        this.content = content;
    }

    toHTML(parent): HTMLElement {
        const btn = document.createElement('button');
        btn.classList.add('Hotspot');
        btn.classList.add("hide");
        btn.setAttribute('slot', `hotspot-${this.slot}`)
        btn.setAttribute('data-position', this.position.toStringDim());
        if (this.normal)
            btn.setAttribute('data-normal', this.normal.toStringDim());
        btn.setAttribute('data-visibility-attribute', 'visible');

        if (this.orbit) {
            btn.setAttribute('data-orbit', this.orbit.toStringAngle());
            btn.setAttribute('data-target', (this.target ? this.target : this.position).toStringDim());
            btn.addEventListener('click', function displayContent(event) {
                const modelViewer = document.querySelector("model-viewer");
                modelViewer.setAttribute("camera-target", (event.target as unknown as HTMLElement).getAttribute("data-target"));
                modelViewer.setAttribute("camera-orbit", (event.target as unknown as HTMLElement).getAttribute("data-orbit"));
                modelViewer.zoom(-100);
            });
        }

        if (this.label) {
            const label = document.createElement('div');
            label.innerText = this.label;
            label.classList.add('HotspotAnnotation');
            btn.appendChild(label);
        }

        if (this.content) {
            new Sidepanel(this.content, this.slot, parent);
            btn.addEventListener('click', function displayContent(event) {
                const id = this.slot;
                Sidepanel.showSidepanel(id);
            });
        }
        return btn;
    }
}