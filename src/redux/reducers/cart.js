const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

function cart(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };
            const items = Object.values(newItems).map((obj) => obj.items);
            const allPizzas = [].concat.apply([], items);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: getTotalPrice(allPizzas),
            };
        }
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload,
            };
        case 'CLEAR_CART':
            return {
                totalPrice: 0,
                totalCount: 0,
                items: [],
            };
        case 'REMOVE_CART_ITEMS':
            const newItems = {
                ...state.items,
            };
            const cartItemTotalPrice = newItems[action.payload].totalPrice;
            const cartItemTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - cartItemTotalPrice,
                totalCount: state.totalCount - cartItemTotalCount,
            };
        case 'PLUS_CART_ITEM': {
            const newItemsArr = [...state.items[action.payload].items, state.items[action.payload].items[0]];

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItemsArr,
                        totalPrice: getTotalPrice(newItemsArr),
                    },
                },
            };
        }
        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const cartItemTotalPrice = { ...state.items[action.payload] }.totalPrice;
            const cartItemTotalCount = state.items[action.payload].items.length;
            const finalTotalCount = Object.values(newItems).map((obj) => obj.items);

            return {
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: cartItemTotalCount > 1 ? cartItemTotalPrice - state.items[action.payload].items[0].price : state.items[action.payload].items[0].price,
                    },
                },
                totalPrice: cartItemTotalCount > 1 ? state.totalPrice - cartItemTotalPrice : state.totalPrice,
                totalCount: 19,
            };
        }
        default:
            return state;
    }
}

export default cart;
