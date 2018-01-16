import { takeLatest , call, put} from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
    try {
        console.log('shop');
        const pageid = action.pageid;
        const response = yield call(axios.get,`https://api.botbanhang.vn/v1/webapp/page?id=${pageid}`);
        yield put({type: 'LOADING_DATA_SUCCESS', message: 'Success', shop: response.data.data,})
    } catch (error) {
        yield put({ type: 'LOADING_DATA_FAILED', message: 'Something wrong'})
    }
}

function* shopSaga() {
    yield takeLatest('LOADING_DATA', fetchData)
}

export default shopSaga;