import { FETCH_ARTICLES, FETCH_ARTICLE, FETCH_TAGS } from '../actions/action-constants';
import axios from 'axios';

const url = `http://localhost:5000/api`;

export function fetchArticles() {
    return (dispatch) => {
        axios.get(`${url}/articles/all`)
            .then(response => {
                if (response.data.success === false) {
                    alert(response.status);
                    return console.log(response, 'not successful');
                }
                const payload = response.data;
                dispatch(allArticles(payload))
            })
    }
}

export function fetchArticle(id) {
    return (dispatch) => {
        axios.get(`${url}/articles/article/${id}`)
            .then(response => {
                if (response.data.success === false) {
                    alert(response.status);
                    return console.log(response, 'not successful');
                }
                const article = response.data.article;
                console.log('retrieved article details', article)
                dispatch(singleArticle(article))
            })
    }
}

export function fetchTags() {
    return (dispatch) => {
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

