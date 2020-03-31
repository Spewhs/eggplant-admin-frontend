import Client from './Client';

class ScenarioApi {
    constructor() {
        this.client = new Client("/scenario");
    }

    getAllByPage({page = 0}) {
        return this.client.get({
            query: {
                page
            }
        });
    }

    getById({ id }) {
        return this.client.get({
            path: `/${id}`
        });
    }

    updateScenario({ scenario }) {
        console.log(scenario);
        return this.client.patch({
            body: scenario
        });
    }

    changeScenarioUsInDataset({ id }) {
        return this.client.patch({
            query: {
                id
            }
        });
    }
}

const scenarioApi = new ScenarioApi();
export default scenarioApi;     