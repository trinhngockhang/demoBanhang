const initialState = {
    
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state}
        default:
            return state;
    }
}

export default homeReducer;