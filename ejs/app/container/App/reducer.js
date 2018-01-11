const initialState = {
    categoryLevel2: [],
    message: '',
    pageid: '',
    item: [],
    count: 0,
    price_total: 0,
    sub_total: 0,
    flatRate: 5000,
}

const inList = (e, item) => {
    var n = item.length;
    if(n == 0) {
        return true;
    }else {
        for(var i = 0; i < n; i++) {
            if(item[i].id === e.id) return false;
        }
        return true;
    }
}

const check = () => {
    if(typeof localStorage["item"] == 'undefined') return true;
    return false;
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
            var root;
            if(check()) {
                root = state.item;
                localStorage.setItem("sub_total", state.sub_total);
                localStorage.setItem("count", state.count);
            }else {
                root = JSON.parse(localStorage.getItem("item"));
            }
            if(inList(e, root)) {
                root.push(e);
                localStorage.setItem("item", JSON.stringify(item));
            }
            return { ...state, item: root };
        }
        case 'ADD_SHOPING_BASKET':{
            var sub_total = parseInt(localStorage.getItem("sub_total")) + parseInt(action.item.price);
            localStorage.setItem("sub_total", sub_total);
            var price_total = sub_total + state.flatRate;
            localStorage.setItem("price_total", price_total);
            var item = state.item.map(e => {
                if (e.id !== action.item.id) return e;
                    return { ...e, stock: e.stock + 1 }
                    });
            localStorage.setItem("item", JSON.stringify(item));
            var count = parseInt(localStorage.getItem("count")) + 1;
            localStorage.setItem("count", count);
            return {
                ...state,
                sub_total,
                item,
                count,
                price_total
            };           
        }
        case 'SUB_SHOPING_BASKET':{
            var sub_total = parseInt(localStorage.getItem("sub_total")) - parseInt(action.item.price);
            localStorage.setItem("sub_total", sub_total);
            var price_total = sub_total + state.flatRate;
            localStorage.setItem("price_total", price_total);
            var items = JSON.parse(localStorage.getItem("item")).map(e => {
                if (e.id !== action.item.id) return e;
                return { ...e, stock: e.stock - 1 }
            });
            var item = items.filter(e => {
                if(e.stock !== 0) return e;
            });
            localStorage.setItem("item", JSON.stringify(item));
            var count = parseInt(localStorage.getItem("count")) - 1;
            localStorage.setItem("count", count);
            return {
                ...state,
                sub_total,
                item,
                count,
                price_total,
            };
        }
        default:
            return state;
    }
}


export default appReducer;