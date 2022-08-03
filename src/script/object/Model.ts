import { modelType } from "../interface/modelType";
import Hotspot from "./Hotspot";
import Sidepanel from "./Sidepanel";
import Vector3 from "./Vector3";

export default class Model {
    modelName: string;
    iosSrc?: string;
    hotspots: Hotspot[];
    environment?: string;
    skybox: boolean;
    poster?: string;
    arIcon?: string;
    arPrompt?: string;
    animation?: {
        name: string;
        speed?: number;
    };

    constructor(json: modelType) {
        this.modelName = json.modelName;
        this.hotspots = [];
        json.hotspots.forEach(target => {
            this.hotspots.push(new Hotspot(
                Vector3.fromJSON(target.position),
                target.normal ? Vector3.fromJSON(target.normal) : null,
                target.orbit ? Vector3.fromJSON(target.orbit) : null,
                target.target ? Vector3.fromJSON(target.target) : null,
                target.label,
                target.content
            ))
        });
        this.poster = json.poster;
        this.arIcon = json.arIcon;
        this.arPrompt = json.arPrompt;
        this.environment = json.environment;
        this.skybox = json.skybox == "true";
        this.animation = json.animation;
    }

    createModelViewer(): HTMLElement {
        const mv = document.createElement('model-viewer');
        mv.setAttribute('bounds', 'tight');
        mv.setAttribute('enable-pan', '');
        mv.setAttribute('shadow-intensity', '1');

        // Load model
        mv.setAttribute('src', this.modelName);

        // Enable AR
        mv.setAttribute('ar', '');
        mv.setAttribute('ar-modes', 'webxr scene-viewer quick-look');

        // AR for iOS
        mv.setAttribute('quick-look-browsers', 'safari, chrome')
        if (this.iosSrc) {
            mv.setAttribute('ios-src', this.iosSrc);
        }

        // Camera Controls
        mv.setAttribute('camera-controls', '');

        // Set poster
        if (this.poster)
            mv.setAttribute('poster', this.poster);

        // Set environment and skybox
        if (this.environment) {
            mv.setAttribute('environment-image', this.environment);
            if (this.environment != 'neutral' && this.skybox)
                mv.setAttribute('skybox-image', this.environment);
        }

        return mv;

    }

    toHTML(): HTMLElement {
        const mv = this.createModelViewer();

        const hotspots = this.getHotspots(mv);
        hotspots.forEach(hs => { mv.appendChild(hs) });
        if (Hotspot.counter > 0)
            mv.appendChild(this.JourneyButton("🚀 Start your journey!"))
        mv.appendChild(this.ARButton("View in your space"));
        mv.appendChild(this.ARPrompt());
        mv.appendChild(this.progressBar());

        return mv;
    }

    private JourneyButton(text: string) {
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.classList.add("circuit-button");
        btn.innerText = text;

        btn.addEventListener("click", (event) => {
            document.querySelector("button[slot='hotspot-0']")?.click();
        })

        return btn;
    }


    private ARButton(text: string) {
        const imgSrc = this.arIcon ? this.arIcon : `${globalThis.defaultRessourcesPath}/ar_icon.png`;
        const btn = document.createElement('button');
        btn.setAttribute('id', 'ar-button')
        btn.setAttribute('slot', 'ar-button')
        btn.setAttribute('style', `background-image: url(${imgSrc});`);
        btn.innerText = text;

        return btn;
    }

    private addNoARButton(text) {
        return `<button id="ar-failure">
        ${text}
      </button>`;
    }

    private getHotspots(modelViewer) {
        const hotspots = [];
        this.hotspots.forEach(target => {
            hotspots.push(target.toHTML(modelViewer));
        });
        return hotspots;
    }

    private ARPrompt() {
        const src = this.arPrompt ? this.arPrompt : `${globalThis.defaultRessourcesPath}/ar_hand_prompt.png`;
        const prompt = document.createElement('div');
        prompt.setAttribute('id', 'ar-prompt');
        const img = document.createElement('img');
        img.setAttribute("src", src);

        prompt.appendChild(img);

        return prompt;
    }

    private progressBar() {
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.classList.add('hide');
        progressBar.setAttribute('slot', 'progress-bar');

        const updateBar = document.createElement('div');
        updateBar.classList.add('update-bar');
        progressBar.appendChild(updateBar);

        return progressBar;
    }

}