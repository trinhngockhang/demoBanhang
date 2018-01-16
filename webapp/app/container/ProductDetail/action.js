export const fetchProduct = (id, pageid) => {
    return {
        type: 'FETCH_PRODUCT',
        id: id,
        pageid: pageid,
    }
}