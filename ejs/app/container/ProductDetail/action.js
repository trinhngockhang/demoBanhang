export const fetchProduct = (pageid) => {
    return {
        type: 'FETCH_PRODUCT',
        pageid: pageid,
    }
}