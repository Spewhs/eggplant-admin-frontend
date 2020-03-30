import Client from './Client';

class EggplantConfigApi {
    constructor() {
        this.client = new Client("/config");
    }

    getConfig() {
        return this.client.get();
    }
}

const eggplantConfigApi = new EggplantConfigApi();
export default eggplantConfigApi;   
