import Client from './Client';

class PredictionApi {
    constructor() {
        this.client = new Client("/prediction");
    }

    makeAPrediction({ scenarioId }) {
        return this.client.post({
            path: `/${scenarioId}`
        });
    }

    makeAPredictionWithSpecifiqueClassifier({ scenarioId, classifierId }) {
        return this.client.post({
            path: `/${scenarioId}`,
            query: {
                classifierId
            }
        });
    }

    getPrediction({page = 0}) {
        return this.client.get({
            query: {
                page
            }
        });
    }

    getPredictionByZucchiniId({ zucchiniId, page = 0 }) {
        return this.client.get({
            path: `/zucchini/${zucchiniId}`,
            query: {
                page
            }
        });
    }

    getPredictionByScenarioId({ scenarioId, page = 0 }) {
        return this.client.get({
            path: `/scenario/${scenarioId}`,
            query: {
                page
            }
        });
    }

    getPredictionByClassifierId({ classifierId, page = 0 }) {
        return this.client.get({
            path: `/classifier/${classifierId}`,
            query: {
                page
            }
        });
    }
}

const predictionApi = PredictionApi();
export default predictionApi;
