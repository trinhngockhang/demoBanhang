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
    ]
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, }
        default:
            return state;
    }
}


export default homeReducer;