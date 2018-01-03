const initialState = {
    produce: [
        {id:'1', src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00",isShow:"false"},
        {id:'2', src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00",isShow:"false"},
        {id:'3',src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00",isShow:"false"},
        {id:'4',src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00",isShow:"false"},
        {id:'5',src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00",isShow:"false"},
        {id:'6',src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00",isShow:"false"},
        {id:'7',src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00",isShow:"false"},
    ],
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