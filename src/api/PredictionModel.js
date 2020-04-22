import predictionApi from './PredictionApi';

export function makeAPrediction({ scenarioId }) {
    predictionApi.makeAPrediction({ scenarioId });
}

export function makeAPredictionWithSpecifiqueClassifier({ scenarioId, classifierId }) {
    return predictionApi.makeAPredictionWithSpecifiqueClassifier({ scenarioId, classifierId });
}

export function getPrediction({page}) {
    return predictionApi.getPrediction({page});
}

export function getPredictionByZucchiniId({ zucchiniId, page }) {
    return predictionApi.getPredictionByZucchiniId({ zucchiniId, page });
}

export function getPredictionByScenarioId({ scenarioId, page }) {
    return predictionApi.getPredictionByScenarioId({ scenarioId, page });
}

export function getPredictionByClassifierId({ classifierId, page }) {
    return predictionApi.getPredictionByClassifierId({ classifierId, page });
}
