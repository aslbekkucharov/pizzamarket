export function setSortType(name) {
    return {
        type: 'SET_SORT_TYPE',
        payload: name,
    };
}

export function setCategory(categoryIndex) {
    return {
        type: 'SET_CATEGORY',
        payload: categoryIndex,
    };
}
