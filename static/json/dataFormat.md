• See below the model Type:

 ```javascript
    // modelType.js
    modelName: string;
    iosSrc?: string;
    environment?: string;
    skybox?: string;
    poster?: string;
    arIcon?: string;
    arPrompt?: string;
    hotspots?: {
        label?: string;
        position:
        {
            x: number;
            y: number;
            z: number;
        };
        normal?:
        {
            x: number;
            y: number;
            z: number;
        };
        orbit?:
        {
            x: number;
            y: number;
            z: number;
        };
        target?:
        {
            x: number;
            y: number;
            z: number;
        };
        content?: string;
    }[];
    animation?: {
        name: string;
        speed?: number;
    };
```

# Définitions


## Loading 
-----------------------
```
modelName
````
The URL to the 3D model. Only glTF/GLB models are supported. 
If your path is local, put your model in static directory and use static as the base of your path. 


````
iosSrc
````
`Optional`: For iOS, the url to a USDZ model.
The url to a USDZ model which will be used on supported iOS 12+ devices via AR Quick Look on Safari. 
 If ios-src is not specified, then a USDZ will be generated on the flyon the fly when the AR button is pressed. This means modifications via the scene-graph API will now be reflected in Quick Look. However, USDZ generation is not perfect, for instance animations are not yet supported, so in some cases supplying ios-src may give better results.

```
poster
```
`Optional`:  URL to image, format webp, png or jpg.
Display a poster to user while the model is loading. 


```
arIcon
```
`Optional`:  URL to image, format webp, png or jpg.
Replace the default "Enter AR" button icon. This button is visible if AR is potentially available (we will have some false positives until the user tries).

```
arPrompt
```
`Optional`:  URL to image, format webp, png or jpg.
Replace the default AR Prompt image visible during webXR experiences.

## Lightning 
-----------------------
```
environment
```
`Optional`: 'neutral' or a URL to a .hdr or .jpg file. 
Controls the environmental reflection of the model. Environment set the reflection without neccessarly affecting the background. 
If not is specified, default lighting will be applied. 
If 'neutral' is specified, then a more evenly-lit environment is applied instead.

```
skybox
```
`Optional`: True or false
Use the environment as skybox (if environment is set with an image URL)



## Annotations 
-----------------------
```
hotspots
```
`Optional`: List of hotspots.
Annotations aligned with the 3D model using data-position and data-normal attributes. 

```
hotspots.label
```
`Optional`: Label of annotation
```
hotspots.position
```
Position of hotspot aligned with model. Vector 3D.

```
hotspots.normal
```
`Optional`: Orientation of hotspot aligned with model. Vector 3D. 
```
hotspots.orbit
```
`Optional`:  Attaches click events to hotspots to move the camera. Define the camera orbit. If hotspots.target is not defined, the camera target the hotspot position. In degrees.

```
hotspots.target
```
`Optional`: If hotspots.orbit is defined, define the camera target. Vector 3D. 
```
hotspots.content
```
`Optional`: Attaches click events to hotspots to display content. When clikcing on hotspot, a sidepanel display the content.


## Animations 
-----------------------
Not implemented yet:
```
animation
```
`Optional`: Activate animation from the model.
```
animation.name
```
Selects an animation to play by name. 

```
animation.speed
```
`Optional`: Speed of animation