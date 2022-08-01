
import { instanceOfModelType, modelType } from "./interface/modelType";
import * as jsons from "../../static/json/*.json";

function fileExtension(filename) {
    return filename.split('.').pop();
}

function validateModelFile(modelName: string) {
    const autorizedExtensions = ["glb", "gltf"];
    return autorizedExtensions.includes(fileExtension(modelName));
}

function validateEnvironment(environment: string) {
    const autorizedExtensions = ["hdr"]
    return !environment
        || environment == "neutral"
        || autorizedExtensions.includes(fileExtension(environment));
}

function validatePoster(poster: string[]) {
    const autorizedExtensions = ["webp", "png", "jpg", "jpeg"]
    return !poster || autorizedExtensions.includes(fileExtension(poster))
}

function validateData(data: any): data is modelType {
    return validateModelFile(data.modelName)
        && validateEnvironment(data.environment)
        && validatePoster(data.posters)
}


export default function loadJSON(id): modelType {
    const data = jsons[id];
    if (data && instanceOfModelType(data) && validateData(data))
        return data;
    return null;
}