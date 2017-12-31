import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
    try {
        console.log('emit');
        const id = action.id;
        const response = yield call(axios.get,`https://api.botbanhang.vn/v1/webapp/category?pageid=${id}&level=1`);
        yield put({type: 'FETCH_CATEGORY_SUCCESS', items: response.data.data, message: 'Success'})   
    }catch (error) {
        yield put({type: 'FETCH_CATEGORY_FAILED', message: 'Something wrong'})
    }
}

function* tabletSaga() {
    yield takeLatest('FETCH_CATEGORY', fetchData);
}

export default tabletSaga;