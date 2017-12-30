import { fork } from 'redux-saga/effects';
import homeSaga from './container/Home/saga';
import shopSaga from './container/Shop/saga';
import tabletSaga from './container/Tablet/saga';

export default function* rootSaga() {
    yield [
        fork(shopSaga),
        fork(tabletSaga),
    ];
} 