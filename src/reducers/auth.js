import { LOGIN, USER_DETAILS } from '../actions/action-constants';

const initialState = {
    user: {},
    userDetails: {}
}

export default function articles(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            let user = Object.assign({}, action.payload);
            return {
                ...state,
                user
            }
        case USER_DETAILS:
            let userDetails = Object.assign({}, action.payload);
            return {
                ...state,
                userDetails
            }
        default:
            return state;
    }
}