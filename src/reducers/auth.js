import { LOGIN, USER_DETAILS, PROFILE, FOLLOWING, CLEAR } from '../actions/action-constants';

const initialState = {
    following: [],
    userr: {},
    user: {},
    userDetails: {}
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
        case CLEAR: 
        return {
            ...state,
            following: [],
        }
        default:
            return state;
    }
}