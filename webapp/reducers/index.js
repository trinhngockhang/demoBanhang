import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import receiptReducers from './receiptReducers';
import advertisementReducer from './advertismentReducer';

const rootReducer = combineReducers({
    advertisementReducer,
    receiptReducers,
})

const saga = createSagaMiddleware();

const initializeStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(saga)
    );

    saga.run(rootSaga);
    return store;
};

export default initializeStore;