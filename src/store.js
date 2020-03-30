import { applyMiddleware, createStore } from 'redux';

// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

// const middleware = applyMiddleware(promise(), thunk, logger());

const localStorageName = 'eggplant:state';

const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(localStorageName, serializedState);
    } catch(e) {
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem(localStorageName);
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch(e) {
        return undefined;
    }
}

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

const persistedState = loadFromLocalStorage();

const store =  createStoreWithMiddleware(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
