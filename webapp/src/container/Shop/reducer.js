const inittialState = {
    data: [],
    isLoading: false,
    message: '',
}

const shopReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'LOADING_DATA':
            return {...state, isLoading: true,}
        case 'LOADING_DATA_SUCCESS':
            return {...state, isLoading: false, data: action.data, message: action.message}
        case 'LOADING_DATA_FAILED':
            return {...state, isLoading: false, message: action.message} 
        default:
            return state   
    }
}

export default shopReducer;