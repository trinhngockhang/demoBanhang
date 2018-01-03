export const fetchCategory = (pageid) => {
    return {
        type: 'FETCH_CATEGORY',
        pageid: pageid,
    }
}