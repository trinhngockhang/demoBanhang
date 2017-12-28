import { fork } from 'redux-saga/effects';
import homeSaga from './container/Home/saga';

export default function* rootSaga() {
    yield [
        fork(homeSaga),
    ];
} 