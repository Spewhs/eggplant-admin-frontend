import * as actionType from '../action/ClassifierActionTypes';


const initialState = {
    classifiers: [],
    fetching: false,
    fetched: false,
    error: null
};

export default function reducer( state = initialState, action) {
    switch (action.type) {
        case actionType.GET_CLASSIFIER: {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case actionType.GET_CLASSIFIER_PENDING: {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case actionType.GET_CLASSIFIER_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                classifiers: action.payload
            }
        }
        case actionType.GET_CLASSIFIER_REJECTED: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        
        case actionType.ACTIVE_CLASSIFIER: {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case actionType.ACTIVE_CLASSIFIER_FULFILLED: {
            const newClassifiers = [...state.classifiers]
            .map(c => {
                if (c.id === action.payload.id) {
                    c.activeClassifier = true;
                } else {
                    c.activeClassifier = false
                }
                return c
            });
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                classifiers: newClassifiers
            }
        }
        case actionType.ACTIVE_CLASSIFIER_REJECTED: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case actionType.CREATE_CLASSIFIER: {
            return {
                ...state,
                fetching: true
            }
        }
        case actionType.CREATE_CLASSIFIER_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                classifiers: state.classifiers.concat(action.payload)
            }
        }
        case actionType.CREATE_CLASSIFIER_REJECTED: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case actionType.UPDATE_CLASSIFIER: {
            return {
                ...state,
                fetching: true
            }
        }
        case actionType.UPDATE_CLASSIFIER_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                classifiers: state.classifiers.concat(action.payload)
            }
        }
        case actionType.UPDATE_CLASSIFIER_REJECTED: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case actionType.DELETE_CLASSIFIER: {
            return {
                ...state,
                fetching: true
            }
        }
        case actionType.DELETE_CLASSIFIER_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                classifiers: [...state.classifiers].filter(c => c.id !== action.payload.id)
            }
        }
        case actionType.DELETE_CLASSIFIER_REJECTED: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        default:
            return state;

    }
}
