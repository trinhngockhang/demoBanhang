import { fork } from 'redux-saga/effects';
import homeSaga from './container/Home/saga';
import shopSaga from './container/Shop/saga';
import tabletSaga from './container/Shop/TabletShop/saga';
import categorySaga from './container/Category/saga';

export default function* rootSaga() {
    yield [
        fork(shopSaga),
        fork(tabletSaga),
        fork(categorySaga),
    ];
} 