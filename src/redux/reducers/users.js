const initState = {
    users: []
}


export default function UsersReducer(state = initState, action) {
    switch (action.type) {
        case "GET_ALL_USERS":
            return { ...state.users, users: action.payload };
        case "ADD_USER":
            return {
                ...state.users,
                users: [action.payload, ...state.users]
            };
        case "UPDATE_USER":
            return {
                ...state.users,
                users: state.users.map((user) => (user._id === action.payload._id) ? (user = action.payload) : user)
            };
        case "DELETE_USER":
            return {
                ...state.users,
                users: state.users.filter(user => user._id !== action.payload)
            };
        default:
            return { ...state.users };
    }

}