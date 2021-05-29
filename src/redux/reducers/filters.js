const initialState = {
    category: null,
    sortType: {
        type: 'rating',
        order: 'desc',
    },
};

function filters(state = initialState, action) {
    if (action.type === 'SET_SORT_TYPE') {
        return {
            ...state,
            sortType: action.payload,
        };
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload,
        };
    }
    return state;
}

export default filters;
