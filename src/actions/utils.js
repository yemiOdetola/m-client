import { TOGGLE_ACTIVE, FOLLOWING, UNFOLLOW } from '../actions/action-constants';

export function toggleFav(className) {
    return (dispatch) => {
        let classNam = className === 'active' ? 'inactive' : 'active';
        dispatch(toggle(classNam)) 
    }
}

export function followUser(accoundId, payload) {
    return dispatch => {
        axios.post(`${url}/follow/${accoundId}`, payload)
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                console.log(response);
                const res = response.data;
                localStorage.setItem('mcUserToken', res.token);
                dispatch(follow(res));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function unFollowUser(accoundId, payload) {
    return dispatch => {
        axios.post(`${url}/unfollow/${accoundId}`, payload)
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                console.log(response);
                const res = response.data;
                localStorage.setItem('mcUserToken', res.token);
                dispatch(follow(res));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}


function toggle(className) {
    return {
        type: TOGGLE_ACTIVE,
        className
    }
}


