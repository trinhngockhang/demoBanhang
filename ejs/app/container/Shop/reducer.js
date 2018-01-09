const inittialState = {
    shop: [],
    message: '',
}

const shopReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'LOADING_DATA':
            return {...state,}
        case 'LOADING_DATA_SUCCESS':
            return {...state,shop: action.shop, message: action.message}
        case 'LOADING_DATA_FAILED':
            return {...state, message: action.message} 
        default:
            return state   
    }
}

export default shopReducer;