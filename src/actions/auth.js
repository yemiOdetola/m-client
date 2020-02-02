import { LOGIN, SIGN_UP } from '../actions/action-constants';
import axios from 'axios';

// const userToken = localStorage.getItem('userToken');
// const local = true;
const url = `http://localhost:5000/api/users`;

export function register(props, payload) {
    return (dispatch) => {
        axios.post(`${url}/register`, payload)
            .then((response) => {
                if (response.data.success === false) {
                    return console.log(response, 'not successful');
                }
                const user = response.data;
                console.log(user);
                dispatch(profileCreated(user));
                props.history.push('/login');
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function login(props, payload) {
    return dispatch => {
        axios.post(`${url}/login`, payload)
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                console.log(response);
                const res = response.data;
                localStorage.setItem('mcUserToken', res.token);
                dispatch(saveUserAuth(res));
                props.history.push('/');
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

function saveUserAuth(data) {
    return {
        type: LOGIN,
        payload: data
    };
}

function profileCreated(user) {
    return {
        type: SIGN_UP,
        payload: user
    }
}