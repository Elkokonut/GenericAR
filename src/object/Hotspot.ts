import Sidepanel from "./Sidepanel";
import Vector3 from "./Vector3";

export default class Hotspot {
    static counter = 0;
    label?: string;
    type?: string;
    position: Vector3;
    normal?: Vector3;
    content?: string;
    slot: number;

    constructor(position: Vector3, normal?: Vector3, label?: string, type?: string, content?: string) {
        this.position = position;
        this.normal = normal;
        this.label = label;
        this.type = type;
        this.slot = Hotspot.counter++;
        this.content = content; // ? new Sidepanel(content, this.slot, document.body) : null;
    }

    toHTML(parent): HTMLElement {
        const btn = document.createElement('button');
        btn.classList.add('Hotspot');
        btn.setAttribute('slot', `hotspot-${this.slot}`)
        btn.setAttribute('data-position', this.position.toString());
        if (this.normal)
            btn.setAttribute('data-normal', this.normal.toString());
        btn.setAttribute('data-visibility-attribute', 'visible');

        if (this.label) {
            const label = document.createElement('div');
            label.innerText = this.label;
            label.classList.add('HotspotAnnotation');
            btn.appendChild(label);
        }

        if (this.content) {
            new Sidepanel(this.content, this.slot, parent);
            btn.addEventListener('click', function handleClick(event) {
                const id = this.slot;
                Sidepanel.showSidepanel(id);
            });
        }
        return btn;
    }
}