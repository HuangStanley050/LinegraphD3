const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";


const initialState = {
    authStatus: false,
    errorMessage: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                authStatus: true
            };
        case LOGIN_FAIL:
            return {
                ...state,
                authStatus: false,
                errorMessage: action.msg
            };

        default:
            return state;
    }

};

export default reducer;
