import decode from "jwt-decode";


export const API_URL = "http://localhost:4000";


export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const getUser = () => {
    try {
        const token = localStorage.getItem("jwtInfo");
        const user = decode(token).user;
        return user
    } catch (error) {
        return {}
    }
}

