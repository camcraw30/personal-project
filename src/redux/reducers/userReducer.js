import axios from 'axios';

const initialState = {
    userId: null,
    firstName: '',
    lastName: '',
    email: '',
    user: {}
};

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function registerUser(userInfo) {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/user/new', userInfo)
    }
}

export function loginUser(userInfo) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/user/login', userInfo)
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: axios.post('/auth/user/logout')
    }
}

export function updateUser(user) {
    return {
        type: "UPDATE_USER",
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "UPDATE_USER":
            return {
                ...state, user: payload
            }
        case `${REGISTER_USER}_REGISTERED`:
            return {
                userId: payload.data.userId,
                firstName: payload.data.firstName,
                lastName: payload.data.lastName,
                email: payload.data.email
            }
        case `${LOGIN_USER}_LOGGED IN`:
            console.log(payload)
            return {
                userId: payload.data.userId,
                firstName: payload.data.firstName,
                lastName: payload.data.lastName,
                email: payload.data.email
            }
        case `${LOGOUT_USER}_LOGGED OUT`:
            return initialState;
        default: return state;
    }
}