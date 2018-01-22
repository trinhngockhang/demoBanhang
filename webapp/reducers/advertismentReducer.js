const initialState = {
    ads: [],
    pageid: '',
    message: '',
}
// fetch data and passing to home page;
const advertisementReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_ADVERTISEMENT':
            return { ...state }
        case 'LOADING_ADVERTISEMENT_SUCCESS':
            return { ...state, ads: action.ads, message: action.message }
        case 'LOADING_ADVERTISEMENT_FAILED':
            return { ...state, message: action.message }
        default:
            return state;
    }
}

export default advertisementReducer;