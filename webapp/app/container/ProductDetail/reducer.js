const initialState = {
    product: {},
    message: '',
    isLoading: false,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {...state, isLoading: true };
        case 'FETCH_PRODUCT_SUCCESS':
            return {...state, isLoading: false, message: action.message, product: action.product }
        case 'FETCH_PRODUCT_FAILED':
            return {...state, isLoading: false, message: action.message }
        default:
            return state;
    }
}

export default productReducer;