import { LOGIN, USER_DETAILS, PROFILE, FOLLOWING, INITIALIZED, ERROR, CLEAR } from '../actions/action-constants';

const initialState = {
    following: [],
    userr: {},
    user: {},
    userDetails: {},
    initialized: false,
    error: false,
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            let user = Object.assign({}, action.payload);
            return {
                ...state,
                user
            }
        case FOLLOWING:
            console.log(action.payload);
            return {
                ...state,
                following: [...state.following, action.payload]
            }
        case USER_DETAILS:
            let userDetails = Object.assign({}, action.payload);
            return {
                ...state,
                userDetails
            }
        case PROFILE:
            let userr = Object.assign({}, action.payload);
            return {
                ...state,
                userr
            }
        case INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        case ERROR:
            return {
                ...state,
                error: true,
                initialized: false,
            }
        case CLEAR:
            return {
                ...state,
                following: [],
            }
        default:
            return state;
    }
}