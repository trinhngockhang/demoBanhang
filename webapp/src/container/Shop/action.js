export const fetchCollection = (pageid) => {
    return {
        type: "LOADING_DATA",
        pageid: pageid,
    }
}