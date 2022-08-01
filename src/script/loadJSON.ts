import * as data from "../../static/cargo/cargo.json";
import { instanceOfModelType, modelType } from "./interface/modelType";

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

export default function loadJSON(): modelType {
    if (instanceOfModelType(data) && validateData(data))
        return data;
    return null;
}