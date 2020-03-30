import * as actionType from '../action/EggplantConfigActionTypes';

const initialState = {
    config: {
        "trainingLabels": [],
        "correctionActions": [],
        "failSteps": []
    },
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_EGGPLANT_CONFIG: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            };
        }
        case actionType.GET_EGGPLANT_CONFIG_PENDING: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            };
        }
        case actionType.GET_EGGPLANT_CONFIG_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                config: action.payload
            };
        }
        case actionType.GET_EGGPLANT_CONFIG_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            };
        }


        default:
            return state;
    }
}