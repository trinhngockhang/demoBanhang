const initialState = {
    category:[],
    isLoading: false,
    message:'',
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY':
            return { ...state, isLoading: true, }
        case 'FETCH_CATEGORY_SUCCESS':
            return { category: action.category, isLoading: false, message: action.message}
        case 'FETCH_CATEGORY_FAILED':
            return {...state, isLoading: false, message: action.message}
        default:
            return state;
    }
}

export default categoryReducer;