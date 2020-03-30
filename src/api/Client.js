import queryString from "query-string";

export default class Client {

    GET = "GET";
    POST = "POST";
    PUT = "PUT";
    PATCH = "PATCH";
    DELETE = "DELETE";

    constructor(urlApi) {
        this.urlApi = urlApi;
    }

    get(params) {
        return this.fetchJson({
            ...params,
            method: this.GET
        });
    }

    post(params) {
        return this.fetchJson({
            ...params,
            method: this.POST
        });
    }

    put(params) {
        return this.fetchJson({
            ...params,
            method: this.PUT
        });
    }

    patch(params) {
        return this.fetchJson({
            ...params,
            method: this.PATCH
        });
    }

    delete(params) {
        return this.fetchJson({
            ...params,
            method: this.DELETE
        });
    }

    async fetchJson(params) {
        const { path, query, method, body, headers, hasOutput } = {
            method: this.GET,
            hasOutput: true,
            ...params
        }

        let bodyStr = undefined;
        if (body) {
            bodyStr = JSON.stringify(body);
        }

        const realHeaders = {
            Accept: "application/json",
            ...headers
        };

        if (method === this.POST || method === this.PUT || method === this.PATCH) {
            realHeaders["Content-Type"] = "application/json";
        }

        const fetchParams = {
            method: method,
            headers: realHeaders,
            body: bodyStr
        };

        const url = this.createUrl({ path, query });

        const response = await fetch(url, fetchParams);
        this.handleError({ url, response });

        if (hasOutput !== undefined && !hasOutput) {
            return null;
        }

        return await response.json();
    }

    createUrl({ path, query }) {
        let pathStr = "";
        if (path) {
            if (!path.startsWith("/")){
                pathStr += "/";
            }
            pathStr += path;
        }

        let url = `${this.urlApi}${pathStr}`;

        if (query) {
            const formattedParams = queryString.stringify(query);
            url += `?${formattedParams}`;
        }

        return url;
    }

    handleError({ url, response }) {
        if (!response.ok) {
            throw new ClientError(`Got fail response on ${url}: ${response.status} ${response.statusText}`);
        }

        return response;
    }
}

export class ClientError {
    constructor(message) {
        this.message = message;
    }

    toString() {
        return `API CALL FAIL (${this.message})`;
    }
}