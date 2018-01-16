const inittialState = {
    items: [],
    message: '',
}

const tabletShopReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_SHOP':
            return {...state }
        case 'FETCH_CATEGORY_SHOP_SUCCESS':
            return {...state, items: action.items, message: action.message}
        case 'FETCH_CATEGORY_SHOP_FAILED':
            return {...state, message: action.message} 
        default:
            return state   
    }
}

export default tabletShopReducer;