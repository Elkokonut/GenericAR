import Hotspot from "./Hotspot";

export default class Sidepanel {
    content: string;
    slot: number;

    constructor(content: string, slot: number, parent) {
        this.content = content;
        this.slot = slot;

        this.addContentAsSidepanel(parent);
    }

    addContentAsSidepanel(parent) {
        const sidepanel = document.createElement('div');
        sidepanel.classList.add("sidepanel");
        sidepanel.id = `content-hotspot-${this.slot}`;

        sidepanel.addEventListener("click", (event) => Sidepanel.hideAllSidepanels());

        const btn = document.createElement('a');
        btn.classList.add("closebtn");
        btn.addEventListener("click", (event) => Sidepanel.hideAllSidepanels());
        btn.href = "javascript: void(0)"
        btn.innerText = "×"
        sidepanel?.appendChild(btn);

        this.addArrows(sidepanel);

        const p = document.createElement('p');
        p.innerText = this.content;
        sidepanel?.appendChild(p);

        parent.appendChild(sidepanel);
    }

    addArrows(sidepanel) {
        if (this.slot != Hotspot.counter - 1) {
            const right = document.createElement('a');
            right.classList.add("rightarrow");
            right.addEventListener("click", (event) => Sidepanel.Next(event));
            right.href = "javascript: void(0)"
            right.innerText = "→";
            sidepanel?.appendChild(right);
        }

        if (this.slot != 0) {
            const left = document.createElement('a');
            left.classList.add("leftarrow");
            left.addEventListener("click", (event) => Sidepanel.Prev(event));
            left.href = "javascript: void(0)"
            left.innerText = "←";
            sidepanel?.appendChild(left);
        }
    }

    static Next(event) {
        event.stopPropagation();
        const elmt = event.target as unknown as HTMLElement
        const id = elmt?.parentElement?.getAttribute("id")?.split("-").pop();
        const hotspot = document.querySelector(`button[slot="hotspot-${+id + 1}"]`);

        if (hotspot)
            hotspot.click();
    }

    static Prev(event) {
        event.stopPropagation();
        const elmt = event.target as unknown as HTMLElement
        const id = elmt?.parentElement?.getAttribute("id")?.split("-").pop();
        const hotspot = document.querySelector(`button[slot="hotspot-${+id - 1}"]`) as unknown as HTMLElement;

        if (hotspot)
            hotspot.click();
    }

    static hideAllSidepanels() {
        const sidepanels = document.querySelectorAll('.show');
        Array.from(sidepanels).forEach(element => {
            if (element) {
                element.classList.remove("transition");
                element.classList.remove("show");
            }
        });
        document.querySelector(".circuit-button").classList.remove("hide");
        return sidepanels.length == 0;
    }

    static showSidepanel(id) {
        const panel = document.getElementById(`content-${id}`);
        const show = panel && !panel.classList.contains("show");
        const transition = Sidepanel.hideAllSidepanels();
        const journeyBtn = document.querySelector(".circuit-button");
        if (show) {
            panel.classList.add("show");
            if (transition)
                panel.classList.add("transition");
            journeyBtn.classList.add("hide")
        }
    }
}