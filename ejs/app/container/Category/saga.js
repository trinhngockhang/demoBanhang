import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fecthCategory(action) {
    try {
        console.log('category');
        const pageid = action.pageid;
        const response = yield call(axios.get,`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&level=1`);
        yield put({ type: 'FETCH_CATEGORY_SUCCESS', category: response.data.data, message: 'Success'})
    } catch (error) {
        yield put({ type: 'FETCH_CATEGORY_FAILED', message: 'Lỗi không xác định'})
    }
}

function* categorySaga() {
    yield takeLatest('FETCH_CATEGORY', fecthCategory);
}

export default categorySaga;