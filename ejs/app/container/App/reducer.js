const initialState = {
    categoryLevel2: [],
    message: '',
    pageid: '',
    item: [],
    sub_total: 0,
    count: 0,
}

const inList = (e, item) => {
    var n = item.length;
    if(n == 0) {
        return true;
    }else {
        for(var i = 0; i < n; i++) {
            if(item[i].id === e.id) return false;
            return true;
        }
    }
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_LEVEL2':
            return { ...state, pageid: action.pageid, }
        case 'FETCH_CATEGORY_LEVEL2_SUCCESS':
            return { ...state, categoryLevel2: action.categoryLevel2, message: action.message }
        case 'FETCH_CATEGORY_LEVEL2_FAILED':
            return { ...state, message: action.message }
        case 'SHOPING_BASKET': {
            var e = action.item !== undefined ? Object.assign({}, action.item, { stock: 0 }) : [];
            var item = state.item;
            if(inList(e, item)) {
                item.push(e);
            }
            return { ...state, item };
        }
        case 'ADD_SHOPING_BASKET':{
            var sub_total = state.sub_total + parseInt(action.item.price);
            localStorage.setItem("sub_total", sub_total);
            var item = state.item.map(e => {
                if (e.id !== action.item.id) return e;
                return { ...e, stock: e.stock + 1 }
            });
            localStorage.setItem("item", JSON.stringify(item));
            var count = state.count + 1;
            localStorage.setItem("count", count);
            return {
                ...state,
                sub_total,
                item,
                count,
            };
        }
        case 'SUB_SHOPING_BASKET':
        var sub_total = state.sub_total - parseInt(action.item.price);
        localStorage.setItem("sub_total", sub_total);
        var items = state.item.map(e => {
            if (e.id !== action.item.id) return e;
            return { ...e, stock: e.stock - 1 }
        });
        var item = items.filter(e => {
            if(e.stock !== 0) return e;
        });
        localStorage.setItem("item", JSON.stringify(item));
        var count = state.count - 1;
        localStorage.setItem("count", count);
        return {
            ...state,
            sub_total,
            item,
            count,
        };
        default:
            return state;
    }
}


export default appReducer;