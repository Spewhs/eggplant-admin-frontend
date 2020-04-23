import * as model from '../api/PredictionModel';
import * as action from './PredictionActionTypes';

// Action creator
export function makeAPrediction({ scenarioId }) {
    return {
        type: action.MAKE_PREDICTION,
        payload: model.makeAPrediction({ scenarioId })
    };
}

export function makeAPredictionWithSpecifiqueClassifier({ scenarioId, classifierId }) {
    return {
        type: action.MAKE_PREDICTION_WITH_SPECIFIC_CLASSIFIER,
        payload: model.makeAPredictionWithSpecifiqueClassifier({ scenarioId, classifierId })
    };
}

export function getPrediction({ page }) {
    return {
        type: action.GET_PREDICTION,
        payload: model.getPrediction({ page })
    };
}

export function getPredictionByZucchiniId({ zucchiniId, page }) {
    return {
        type: action.GET_PREDICTION_BY_ZUCCHINI_ID,
        payload: model.getPredictionByZucchiniId({ zucchiniId, page })
    };
}

export function getPredictionByScenarioId({ scenarioId, page }) {
    return {
        type: action.GET_PREDICTION_BY_SCENARIO_ID,
        payload: model.getPredictionByScenarioId({ scenarioId, page })
    };
}

export function getPredictionByClassifierId({ classifierId, page }) {
    return {
        type: action.GET_PREDICTION_BY_CLASSIFIER_ID,
        payload: model.getPredictionByClassifierId({ classifierId, page })
    };
}
