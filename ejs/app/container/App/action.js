export const fetchInfoItem = (item, price) => {
    return {
        type: "FETCH_INFO_ITEM",
        item: item,
        price: price,
    } 
}

export const removeItem = (item, price) => {
    return {
        type: "REMOVE_ITEM",
        item: item,
        price: price,
    }
}