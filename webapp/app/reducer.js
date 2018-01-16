import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import appReducer from './container/App/reducer';
import homeReducer from './container/Home/reducer';
import shopReducer from './container/Shop/reducer';
import tabletShopReducer from './container/Shop/TabletShop/reducer';
import categoryReducer from './container/Category/reducer';
import productReducer from './container/ProductDetail/reducer';

const rootReducer = combineReducers({
    appReducer,
    homeReducer,
    shopReducer,
    tabletShopReducer,
    categoryReducer,
    productReducer,
})

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    store.runSaga = sagaMiddleware.run;
    store.runSaga(rootSaga);
    return store
}