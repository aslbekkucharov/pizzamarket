import axios from 'axios';

export function setLoadingStatus(status) {
    return {
        type: 'SET_LOADING_STATUS',
        payload: status,
    };
}

export function fetchPizzas(category, sortType) {
    return (dispatch) => {
        dispatch(setLoadingStatus(false));
        axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortType.type}&_order=${sortType.order}`).then(({ data }) => {
            dispatch(setPizzas(data));
        });
    };
}

export function setPizzas(items) {
    return {
        type: 'SET_PIZZAS',
        payload: items,
    };
}
