import { fork } from 'redux-saga/effects';
import homeSaga from './container/Home/saga';
import shopSaga from './container/Shop/saga';

export default function* rootSaga() {
    yield [
        fork(homeSaga),
        fork(shopSaga),
    ];
} 