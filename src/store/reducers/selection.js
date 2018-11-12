const initialState = {
    currentSelection: "cycling"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "select":
            return {
                ...state,
                currentSelection: action.payload
            };
        default:
            return state;
    }

};

export default reducer;
