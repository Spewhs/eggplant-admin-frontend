import * as model from '../api/ClassifierModel';
import * as actions from './ClassifierActionTypes';

// Action creator

export function getClassifierPage({ page }) {
    return {
        type: actions.GET_CLASSIFIER,
        payload: model.getClassifier({ page })
    };
}

export function getClassifierByVersionOrActive({ version }) {
    return {
        type: actions.GET_CLASSIFIER_VERSION_OR_PAGE,
        payload: model.getClassifierByVersionOrActive({ version })
    }
}

export function getClassifierById({ id }) {
    return {
        type: actions.GET_CLASSIFIER_BY_ID,
        payload: model.getClassifierById({ id })
    }
}

export function createNewClassifier({ payload }) {
    return {
        type: actions.CREATE_CLASSIFIER,
        payload: model.createNewClassifier({ payload})
    }
}

export function activeClassifier({ id }) {
    return {
        type: actions.ACTIVE_CLASSIFIER,
        payload: model.activeClassifier({ id })
    }
}

export function updateClassifier({ payload }) {
    return {
        type: actions.UPDATE_CLASSIFIER,
        payload: model.updateClassifier({ payload })
    }
}

export function deleteClassifier({ id }) {
    return {
        type: actions.DELETE_CLASSIFIER,
        payload: model.deleteClassifierById({ id })
    }
}
