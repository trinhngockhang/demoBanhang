import { takeLatest, call, put } from 'redux-saga/effects';
import 'isomorphic-unfetch';

function* fetchData(action) {
    try {
        console.log('app');
        const pageid = action.pageid;
        const response = yield fetch(`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&level=1`).then(r => r.json());
        const listId = response.data.map(s => s.id);
        const id = listId[0];
        const result = yield fetch(`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&level=2&parent=${id}`).then(r => r.json());
        yield put({ type: 'LOADING_ADVERTISEMENT_SUCCESS',ads: result.data, message: 'Success'})
    } catch (error) {
        yield put({ type: 'LOADING_ADVERTISEMENT_FAILED', message: 'Lỗi không xác định'})
    }
}

function* advertisementSaga() {
    yield takeLatest('LOADING_ADVERTISEMENT', fetchData);
}

export default advertisementSaga;