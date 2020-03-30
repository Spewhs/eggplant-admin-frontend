import { default as classifierApi } from './ClassifierApi';

export function getClassifier({ page }) {
    return classifierApi.getAllByPage({ page });
}

export function getClassifierByVersionOrActive({ version }) {
    return classifierApi.getByVersionOrActive({ version });
}

export function getClassifierById({ id }) {
    return classifierApi.getById({ id });
}

export function createNewClassifier({ payload }) {
    return classifierApi.createNew({ payload });
}

export function activeClassifier({ id }) {
    return classifierApi.activeClassifier({ id });
}

export function updateClassifier({ payload }) {
    return classifierApi.updateClassifier({ payload });
}

export function deleteClassifierById({ id }) {
    return classifierApi.deleteById({ id });
}