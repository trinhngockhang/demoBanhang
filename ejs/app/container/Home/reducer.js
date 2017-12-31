const initialState = {
    produce: [
        {src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00"},
        {src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00"},
        {src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00"},
        {src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00"},
        {src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00"},
        {src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00"},
        {src: "./images/product/other/09.jpg", catName: "Laptops", productName: "Apple iPad Mini", productName1: "G2356", sale: "$50.00", regular: "2,999.00"},
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