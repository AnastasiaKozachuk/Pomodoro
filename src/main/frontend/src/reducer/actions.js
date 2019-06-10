export const save = (token, role,isAuthenticated, username) => {

    return {
        type: 'SAVE',
        token:token,
        role:role,
        isAuthenticated:isAuthenticated,
        username:username
    }
};
