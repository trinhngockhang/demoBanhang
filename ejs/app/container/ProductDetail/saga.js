import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
    try {
        console.log('product');
        const id = action.id;
        const pageid = action.pageid;
        const response = yield call(axios.get,`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&id=${id}`);
        yield put({type: 'FETCH_PRODUCT_SUCCESS', product: response.data.data, message: 'Success'})   
    }catch (error) {
        yield put({type: 'FETCH_PRODUCT_FAILED', message: 'Something wrong'})
    }
}

function* productSaga() {
    yield takeLatest('FETCH_PRODUCT', fetchData);
}

export default productSaga;