import { TOGGLE_ACTIVE } from '../actions/action-constants';

const initialState = {
    className: {}
}

export default function utils(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ACTIVE:
            return {
                ...state,
                className: action.className
            }
        default:
            return state;
    }
}