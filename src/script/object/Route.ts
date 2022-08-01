import * as jsons from "../../../static/json/*.json";

export default class Route {

    static defaultRoute = "cargo";

    static validRoute(id): boolean {
        return id && jsons[id] != null;
    }

    static chooseRoute() {
        const route = Route.getPathname();
        if (Route.validRoute(route))
            return route;
        else if (Route.hasName() && Route.validRoute(Route.getName()))
            return Route.getName();
        else
            return Route.defaultRoute;
    }

    static getName() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('name')
    }

    static hasName() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.has('name')
    }

    static getPathname() {
        return window.location.pathname.split('/').pop();
    }
}