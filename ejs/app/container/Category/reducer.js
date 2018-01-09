const initialState = {
    category: [],
    message:'',
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY':
            return { ...state, }
        case 'FETCH_CATEGORY_SUCCESS':
            return { category: action.category, message: action.message}
        case 'FETCH_CATEGORY_FAILED':
            return {...state, message: action.message}
        default:
            return state;
    }
}

export default categoryReducer;