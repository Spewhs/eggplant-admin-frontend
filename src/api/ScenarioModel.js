import scenarioApi from './ScenarioApi';

export function getAllByPage({page = 0}) {
    return scenarioApi.getAllByPage({page});
}

export function getById({ id }) {
    return scenarioApi.getById({ id });
}