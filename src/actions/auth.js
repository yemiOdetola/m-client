import { SIGN_IN, SIGN_UP } from '../actions/action-constants';
import axios from 'axios';

// const userToken = localStorage.getItem('userToken');
// const local = true;
const url = `http://localhost:5000/api/users`;

export function signup(payload) {
    return (dispatch) => {
        axios.post(`${url}/register`, payload)
            .then((response) => {
                if (response.data.success === false) {
                    return console.log(response, 'not successful');
                }
                const user = response.data;
                console.log(user);
                dispatch(profileCreated(user));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function signin(payload) {
    return dispatch => {
        axios.post(url, payload)
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                const responseJSON = response.json();
                dispatch(saveUserAuth(responseJSON))
                console.log('register response', response.json);
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

function saveUserAuth(data) {
    return {
        type: SIGN_IN,
        payload: data
    };
}

function profileCreated(user) {
    return {
        type: SIGN_UP,
        payload: user
    }
}