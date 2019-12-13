import { TOGGLE_ACTIVE } from '../actions/action-constants';

export function toggleFav(className) {
    return (dispatch) => {
        let classNam = className === 'active' ? 'inactive' : 'active';
        dispatch(toggle(classNam)) 
    }
}


function toggle(className) {
    return {
        type: TOGGLE_ACTIVE,
        className
    }
}


