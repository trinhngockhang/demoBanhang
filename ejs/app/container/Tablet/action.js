export const fetchCategory = (id) => {
    return {
        type: 'FETCH_CATEGORY',
        id: id,
    }
}