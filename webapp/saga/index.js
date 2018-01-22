import { all, fork } from 'redux-saga/effects';
import advertisementSaga from './advertisementSaga';
import productSaga from './productSaga';
import categorySaga from './categorySaga';

export default function* rootSaga() {
    yield all([
        fork(advertisementSaga),
        fork(productSaga)
    ])
} 