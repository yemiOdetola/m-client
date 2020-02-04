import { FETCH_ARTICLES, FETCH_ARTICLE, FETCH_TAGS, COMMENTS, INITIALIZED, ERROR, COMPLETED, CLEAR } from '../actions/action-constants';
import axios from 'axios';
import globals from '../globals';

const url = `${globals.BASE_URL}/articles`;

export function fetchArticles() {
    return (dispatch) => {
        dispatch(clear());
        axios.get(`${url}/all`)
            .then(response => {
                if (response.data.success === false) {
                    alert(response.status);
                    return console.log(response, 'not successful');
                }
                const payload = response.data.articles;
                dispatch(allArticles(payload))
            })
    }
}

export function fetchArticle(id) {
    return (dispatch) => {
        dispatch(clear());
        axios.get(`${url}/article/${id}`)
            .then(response => {
                if (response.data.success === false) {
                    alert(response.status);
                    return console.log(response, 'not successful');
                }
                const article = response.data.article;
                dispatch(singleArticle(article));
            })
    }
}

export function addToFavorites(articleId, payload) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        dispatch(initialized());
        axios.post(`${url}/article/${articleId}/updateFavorites`, payload, {
            headers: {
                'Authorization': userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    dispatch(error());
                    return console.log(response, 'not successful');
                }
                dispatch(completed());
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function removeFromFavorites(articleId) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        dispatch(initialized());
        axios.post(`${url}/article/${articleId}/removeFavorites`, {}, {
            headers: {
                'Authorization': userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    dispatch(error());
                    return console.log(response, 'not successful');
                }
                dispatch(completed());
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function fetchComments(articleId) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        dispatch(initialized());
        axios
        .get(`${url}/article/${articleId}/comments`, {
            headers: {
                'Authorization': userToken
            }
        })
        .then(response => {
            if (response.success === false) {
                dispatch(error());
                return console.log(response, 'not successful');
            }
            const res = response.data;
            console.log(res)
                dispatch(clear())
                dispatch(completed());
                dispatch(comments(res.comments))
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function removeComment(articleId, payload) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        dispatch(initialized());
        axios
            .delete(`${url}/article/${articleId}/comment`, payload, {
                headers: {
                    'Authorization': userToken
                }
            })
            .then(response => {
                if (response.success === false) {
                    dispatch(error());
                    return console.log(response, 'not successful');
                }
                dispatch(completed());
                this.fetchComments(articleId);
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}


export function writeComment(payload) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        axios
            .post(`${url}/article/${payload.article}/comment`, payload, {
                headers: {
                    'Authorization': userToken
                }
            })
            .then(response => {
                if (response.success === false) {
                    dispatch(error());
                    return console.log(response, 'not successful');
                }
                this.fetchComments(payload.article);
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}


export function fetchTags() {
    return (dispatch) => {
        dispatch(clear());
        axios.get(`${url}/tags/all`)
            .then(response => {
                if (response.data.success === false) {
                    alert(response);
                    return console.log(response, 'not successful');
                }
                const payload = response.data;
                dispatch(allTags(payload))
            })
    }
}

function allTags(payload) {
    return {
        type: FETCH_TAGS,
        payload
    }
}

function singleArticle(article) {
    return {
        type: FETCH_ARTICLE,
        article
    }
}

function allArticles(payload) {
    return {
        type: FETCH_ARTICLES,
        payload
    }
}

function comments(payload) {
    return {
        type: COMMENTS,
        payload
    }
}

function initialized() {
    return {
        type: INITIALIZED,
        payload: ''
    }
}

function error() {
    return {
        type: ERROR,
        payload: ''
    }
}

function completed() {
    return {
        type: COMPLETED,
        payload: ''
    }
}

function clear() {
    return {
        type: CLEAR,
        payload: ''
    }
}
