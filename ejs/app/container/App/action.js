export const fetchInfoItem = (item, price) => {
    return {
        type: "FETCH_INFO_ITEM",
        item: item,
        price: price,
    } 
}