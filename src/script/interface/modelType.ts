export interface modelType {
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
}

export function instanceOfModelType(object: any): object is modelType {
    let isModelType = 'modelName' in object;
    if (isModelType && 'targets' in object) {
        let i = 0;
        while (isModelType && i < object.targets.length) {
            isModelType = isModelType
                && 'position' in object.targets[i]
                && 'x' in object.targets[i].position
                && 'y' in object.targets[i].position
                && 'z' in object.targets[i].position
            i++;
        }
    }
    return isModelType;
}