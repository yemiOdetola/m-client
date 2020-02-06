// import { FOLLOWING, UNFOLLOW } from '../actions/action-constants';
import axios from 'axios';
import globals from '../globals';
const url = `${globals.BASE_URL}/users`;

export function followUser(payload) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        axios.post(`${url}/follow/${payload.accountId}`, payload, {
            headers: {
                Authorization: userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                window.location.reload();
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function unfollowUser(payload) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        axios.post(`${url}/unfollow/${payload.accountId}`, payload, {
            headers: {
                Authorization: userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                window.location.reload();
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}



