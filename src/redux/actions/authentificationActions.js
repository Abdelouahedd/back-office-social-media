export const authSuccess = (token, message) => {
    return {
        type: "AUTH_SUCCESS",
        token: token,
        message: message
    };
};


export const authFail = (error) => {
    return {
        type: "AUTH_FAIL",
        error: error
    };
};

export const logOut = () => {
    return {
        type: "LOGOUT",
        message: "log out",
    };
}

