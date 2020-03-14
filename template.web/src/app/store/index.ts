import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import rootReducer from './reducers';
import { storageService, appConstants } from '../shared';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}
const composeEnhancers = (
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose, epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const persistedState = storageService.getItem(
        appConstants.keys.state,
        appConstants.storageTypes.session
    ), store = createStore(
        rootReducer,
        persistedState,
        composeEnhancers(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(rootEpic);
    store.subscribe(() => storageService.setItem(appConstants.keys.state, store.getState(), appConstants.storageTypes.session))
    return store;
}
