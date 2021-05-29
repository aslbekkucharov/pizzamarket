export function setAddPizzaToCart(pizzaObj) {
    return {
        type: 'ADD_PIZZA_CART',
        payload: pizzaObj,
    };
}

export function clearCart() {
    return {
        type: 'CLEAR_CART',
    };
}

export function removeCartItem(id) {
    return {
        type: 'REMOVE_CART_ITEMS',
        payload: id,
    };
}

export function plusItem(id) {
    return {
        type: 'PLUS_CART_ITEM',
        payload: id,
    };
}

export function minusItem(id) {
    return {
        type: 'MINUS_CART_ITEM',
        payload: id,
    };
}
