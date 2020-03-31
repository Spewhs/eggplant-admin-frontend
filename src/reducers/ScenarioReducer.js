import * as actionType from '../action/ScenarioActionType';

const initialState = {
    scenarios: [],
    numbersOfScenarios: 0,
    selectedScenario: {},
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_SCENARIO: {
            return {
                ...state,
                fetching: true,
                fetched:false,
                error: null
            }
        }
        case actionType.GET_SCENARIO_PENDING: {
            return {
                ...state,
                fetching: true,
                fetched: true,
            }
        }
        case actionType.GET_SCENARIO_FULFILLED: {
            const { items, numberOfItems } = action.payload;
            return {
                ...state,
                fetching: false,
                fetched: true,
                scenarios: items,
                numbersOfScenarios: numberOfItems,
            }
        }
        case actionType.GET_SCENARIO_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }

        case actionType.GET_SCENARIO_BY_ID: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null,
            }
        }
        case actionType.GET_SCENARIO_BY_ID_PENDING: {
            return {
                ...state,
            }
        }
        case actionType.GET_SCENARIO_BY_ID_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                selectedScenario: action.payload
            }
        }
        case actionType.GET_SCENARIO_BY_ID_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: action.payload
            }
        }

        case actionType.UPDATE_SCENARIO: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null,
            }
        }
        case actionType.UPDATE_SCENARIO_PENDING: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null,
            }
        }
        case actionType.UPDATE_SCENARIO_FULFILLED: {
            const newScenarios = [...state.scenarios]
                .map(scenario => {
                    if (scenario.id === action.payload.id) {
                        scenario = action.payload;
                    }
                    return scenario;
                })
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                scenarios: newScenarios,
                selectedScenario: action.payload,
            }
        }
        case actionType.UPDATE_SCENARIO_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: action.payload,
            }
        }

        default:
            return state;
    }
}