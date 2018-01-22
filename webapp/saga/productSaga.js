import { takeLatest, call, put } from 'redux-saga/effects';
import 'isomorphic-unfetch';

function* fetchData(action) {
    try {
        console.log('product');
        const id = action.id;
        const pageid = action.pageid;
        const response = yield fetch(`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&id=${id}`);
        const data = response.json();
        yield put({type: 'FETCH_PRODUCT_SUCCESS', product: data, message: 'Success'})   
    }catch (error) {
        yield put({type: 'FETCH_PRODUCT_FAILED', message: 'Something wrong'})
    }
}

function* productSaga() {
    yield takeLatest('FETCH_PRODUCT', fetchData);
}

export default productSaga;