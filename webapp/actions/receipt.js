export const shopingBasket = (item) => {
    return {
        type: 'SHOPING_BASKET',
        item: item,
    }
}

export const addShopingBasket = (item) => {
    return {
        type: 'ADD_SHOPING_BASKET',
        item: item,
    }
}

export const subShopingBasket = (item) => {
    return {
        type: 'SUB_SHOPING_BASKET',
        item: item,
    }
}