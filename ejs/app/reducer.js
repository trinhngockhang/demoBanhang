import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import homeReducer from './container/App/reducer';

const rootReducer = combineReducers({
    homeReducer,
})

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    store.runSaga = sagaMiddleware.run;
    store.runSaga(rootSaga);
    return store
}