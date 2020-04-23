import * as actionType from '../action/PredictionActionTypes';

const initialState = {
    predictions: [],
    numberOfPredictions: 0,
    predictionSubmitted: false,
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case actionType.MAKE_PREDICTION: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                predictionSubmitted: false,
                error: null
            }
        }
        case actionType.MAKE_PREDICTION_PENDING: {
            return {
                ...state,
                fetching: true,
                fetched: true
            }
        }
        case actionType.MAKE_PREDICTION_FULFILLED: {
            return {
                ...state,
                predictionSubmitted: true,
                fetched: true,
                fetching: false
            }
        }
        case actionType.MAKE_PREDICTION_REJECTED: {
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload
            }
        }

        case actionType.MAKE_PREDICTION_WITH_SPECIFIC_CLASSIFIER: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                predictionSubmitted: false,
                error: null
            }
        }
        case actionType.MAKE_PREDICTION_WITH_SPECIFIC_CLASSIFIER_PENDING: {
            return {
                ...state,
                fetching: true,
                fetched: true
            }
        }
        case actionType.MAKE_PREDICTION_WITH_SPECIFIC_CLASSIFIER_FULFILLED: {
            return {
                ...state,
                predictionSubmitted: true,
                fetched: true,
                fetching: false
            }
        }
        case actionType.MAKE_PREDICTION_WITH_SPECIFIC_CLASSIFIER_REJECTED: {
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload
            }
        }

        case actionType.GET_PREDICTION: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            }
        }
        case actionType.GET_PREDICTION_PENDING: {
            return {
                ...state,
                fetching: true,
            }
        }
        case actionType.GET_PREDICTION_FULFILLED: {
            const { items, numberOfItems } = action.payload;
            return {
                ...state,
                fetching: false,
                fetched: true,
                predictions: items,
                numberOfPredictions: numberOfItems
            }
        }
        case actionType.GET_PREDICTION_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }

        case actionType.GET_PREDICTION_BY_SCENARIO_ID: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            }
        }
        case actionType.GET_PREDICTION_BY_SCENARIO_ID_PENDING: {
            return {
                ...state,
                fetching: true,
            }
        }
        case actionType.GET_PREDICTION_BY_SCENARIO_ID_FULFILLED: {
            const { items, numberOfItems } = action.payload;
            return {
                ...state,
                fetching: false,
                fetched: true,
                predictions: items,
                numberOfPredictions: numberOfItems
            }
        }
        case actionType.GET_PREDICTION_BY_SCENARIO_ID_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }

        case actionType.GET_PREDICTION_BY_ZUCCHINI_ID: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            }
        }
        case actionType.GET_PREDICTION_BY_ZUCCHINI_ID_PENDING: {
            return {
                ...state,
                fetching: true,
            }
        }
        case actionType.GET_PREDICTION_BY_ZUCCHINI_ID_FULFILLED: {
            const { items, numberOfItems } = action.payload;
            return {
                ...state,
                fetching: false,
                fetched: true,
                predictions: items,
                numberOfPredictions: numberOfItems
            }
        }
        case actionType.GET_PREDICTION_BY_ZUCCHINI_ID_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }

        case actionType.GET_PREDICTION_BY_CLASSIFIER_ID: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            }
        }
        case actionType.GET_PREDICTION_BY_CLASSIFIER_ID_PENDING: {
            return {
                ...state,
                fetching: true,
            }
        }
        case actionType.GET_PREDICTION_BY_CLASSIFIER_ID_FULFILLED: {
            const { items, numberOfItems } = action.payload;
            return {
                ...state,
                fetching: false,
                fetched: true,
                predictions: items,
                numberOfPredictions: numberOfItems
            }
        }
        case actionType.GET_PREDICTION_BY_CLASSIFIER_ID_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }


    
        default:
            return state;
    }
}
