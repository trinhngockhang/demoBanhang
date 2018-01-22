export const loadAds = (pageid) => {
    return {
        type: 'LOADING_ADVERTISEMENT',
        pageid: pageid,
    }
}