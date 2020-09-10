import { updateObject } from "../../_helper/helper";


const initState = {
    token: "",
    message: "",
    error: "",
}


export default function AuthReducer(state = initState, action) {
    switch (action.type) {
        case "AUTH_START":
            return updateObject(state, { error: null, loading: true });
        case "AUTH_SUCCESS":
            return updateObject(state, {
                token: action.token,
                message: action.message,
                error: "",
            });
        case "AUTH_FAIL":
            return updateObject(state, {
                token: "",
                message: "",
                error: action.error,
            });
        case "LOGOUT":
            localStorage.clear();
            return updateObject(state, initState);
        default:
            return { ...state };
    }

}