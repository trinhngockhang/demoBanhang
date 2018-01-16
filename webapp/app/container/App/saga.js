import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
    try {
        console.log('app')
        const pageid = action.pageid;
        const response = yield call(axios.get, `https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&level=1`)
        const listId = response.data.data.map(item => item.id);
        const id = listId[0];
        const result = yield call(axios.get, `https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&level=2&parent=${id}`)
        yield put({ type: 'FETCH_CATEGORY_LEVEL2_SUCCESS',categoryLevel2: result.data.data, message: 'Success'})
    } catch (error) {
        yield put({ type: 'FETCH_CATEGORY_LEVEL2_FAILED', message: 'Lỗi không xác định'})
    }
}

function* appSaga() {
    yield takeLatest('FETCH_CATEGORY_LEVEL2', fetchData);
}

export default appSaga;