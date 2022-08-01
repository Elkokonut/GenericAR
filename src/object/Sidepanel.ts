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

        const p = document.createElement('p');
        p.innerText = this.content;
        sidepanel?.appendChild(p);

        parent.appendChild(sidepanel);
    }

    static hideAllSidepanels() {
        const sidepanels = document.querySelectorAll('.show');
        Array.from(sidepanels).forEach(element => {
            if (element) {
                element.classList.remove("show");
            }
        });
    }

    static showSidepanel(id) {
        const panel = document.getElementById(`content-${id}`);
        const show = panel && !panel.classList.contains("show");
        Sidepanel.hideAllSidepanels();
        if (show) {
            panel.classList.add("show");
        }
    }
}