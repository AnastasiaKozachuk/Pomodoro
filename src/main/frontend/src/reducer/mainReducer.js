const reducer = (state = {
    token: localStorage.getItem("myToken") === null ? '' : localStorage.getItem("myToken"),
    role: localStorage.getItem("role") === null ? '' : localStorage.getItem("role"),
    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")),
    username: localStorage.getItem("username") === null ? '' : localStorage.getItem("username")
}, action) => {

    const {token, role, isAuthenticated, username} = action;
    switch (action.type) {

        case 'SAVE':
            state = {token, role, isAuthenticated, username};
            return state;
        default:
            return state;
    }
};

export default reducer;
