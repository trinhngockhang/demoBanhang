const inittialState = {
    items: [],
    isLoading:false,
    message: '',
}

const tabletReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_SHOP':
            return {...state, isLoading: true,}
        case 'FETCH_CATEGORY_SHOP_SUCCESS':
            return {...state, isLoading: false, items: action.items, message: action.message}
        case 'FETCH_CATEGORY_SHOP_FAILED':
            return {...state, isLoading: false, message: action.message} 
        default:
            return state   
    }
}

export default tabletReducer;