export const fecthCategoryLevel2 = (pageid) => {
    return {
        type: 'FETCH_CATEGORY_LEVEL2',
        pageid: pageid,
    }
}

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
    console.log("a");
    return {
        type: 'SUB_SHOPING_BASKET',
        item: item,
    }
}