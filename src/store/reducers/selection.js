const initialState = {
    currentSelection: "cycling",
    errorData: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "select":
            return {
                ...state,
                currentSelection: action.payload
            };
        case "writeError":
            return {
                ...state,
                errorData: action.payload
            };
        case "formError":
            return {
                ...state,
                errorData: "Something wrong with the input"
            };
        case "writeSuccess":
            return {
                ...state,
                errorData: null
            }
        default:
            return state;
    }

};

export default reducer;
