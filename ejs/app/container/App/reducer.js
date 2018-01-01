const initialState = {
    suggest: [
        {src: "./images/product/other/s05.jpg", name: "Razer RZ02-01071500-R3M1", sale: "$50.00", price: "$2,999.00"},
        {src: "./images/product/other/s05.jpg", name: "Razer RZ02-01071500-R3M1", sale: "$50.00", price: "$2,999.00"},
        {src: "./images/product/other/s05.jpg", name: "Razer RZ02-01071500-R3M1", sale: "$50.00", price: "$2,999.00"},
        {src: "./images/product/other/s05.jpg", name: "Razer RZ02-01071500-R3M1", sale: "$50.00", price: "$2,999.00"},
        {src: "./images/product/other/s05.jpg", name: "Razer RZ02-01071500-R3M1", sale: "$50.00", price: "$2,999.00"},
        {src: "./images/product/other/s05.jpg", name: "Razer RZ02-01071500-R3M1", sale: "$50.00", price: "$2,999.00"},
        {src: "./images/product/other/s05.jpg", name: "Razer RZ02-01071500-R3M1", sale: "$50.00", price: "$2,999.00"},
    ],
    electric: [
        {src: "./images/logos/subMenuThietbi.jpg", name:"Thiết bị khác"},
        {src: "./images/logos/subMenuThietbi.jpg", name:"Thiết bị khác"},
        {src: "./images/logos/subMenuThietbi.jpg", name:"Thiết bị khác"},
        {src: "./images/logos/subMenuThietbi.jpg", name:"Thiết bị khác"},
    ],
    electricAds: [
        {src:"./images/banner_boxes/submenu-02.png"},
        {src:"./images/banner_boxes/submenu-02.png"},
        {src:"./images/banner_boxes/submenu-02.png"},
        {src:"./images/banner_boxes/submenu-02.png"},
    ],
    data: [],
    isLoading: false,
    total: 0,
    price:0,
    count:0,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, }
        case 'FETCH_INFO_ITEM':{
            state.data= state.data.concat(action.item);
            state.isLoading = true;
            state.total= state.total + parseFloat(action.price);
            state.count= state.count + 1;
            localStorage.setItem('data',JSON.stringify(state.data));
            localStorage.setItem('isLoading', state.isLoading);
            localStorage.setItem('total', state.total);
            localStorage.setItem('count', state.count);
            return {...state}
        }
        case 'REMOVE_ITEM': {
            state.data= state.data.map(item => !item.id);
            state.isLoading = true;
            state.total= state.total - parseFloat(action.price);
            state.count= state.count - 1;
            localStorage.setItem('data',JSON.stringify(state.data));
            localStorage.setItem('isLoading', state.isLoading);
            localStorage.setItem('total', state.total);
            localStorage.setItem('count', state.count);
            return {...state}
        }
        default:
            return state;
    }
}


export default appReducer;