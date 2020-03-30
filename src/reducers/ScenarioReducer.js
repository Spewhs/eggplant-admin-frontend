import * as actionType from '../action/ScenarioActionType';

const initialState = {
    scenarios: [],
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
            return {
                ...state,
                fetching: false,
                fetched: true,
                scenarios: action.payload
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

        default:
            return state;
    }
}