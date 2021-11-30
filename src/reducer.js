const initialState = { value: 0 };

const reducer = (state = initialState, action) => { //reducer-чистая ф-ция, зависит от state и action
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: state.value + 1
            };
        case 'DEC':
            return {
                ...state,
                value: state.value - 1
            };
        case 'RND':
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

export default reducer;