import { fork } from 'redux-saga/effects';
import appSaga from './container/App/saga';
import homeSaga from './container/Home/saga';
import shopSaga from './container/Shop/saga';
import tabletShopSaga from './container/Shop/TabletShop/saga';
import categorySaga from './container/Category/saga';
import productSaga from './container/ProductDetail/saga';

export default function* rootSaga() {
    yield [
        fork(appSaga),
        fork(shopSaga),
        fork(tabletShopSaga),
        fork(categorySaga),
        fork(productSaga),
    ];
} 