import { FETCH_ARTICLES, FETCH_ARTICLE, FETCH_TAGS, CLEAR, INITIALIZED, ERROR, COMPLETED } from '../actions/action-constants';

const initialState = {
    articles: [],
    article: {},
    tags: [],
    initialized: false,
    error: false,
    completed: false,
}

export default function articles(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload.articles
            }
        case FETCH_ARTICLE:
            return {
                ...state,
                article: action.article
            }
        case FETCH_TAGS:
            return {
                ...state,
                tags: action.payload.tags
            }
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        case ERROR:
            return {
                ...state,
                error: true,
                initialized: false
            }
        case COMPLETED:
            return {
                ...state,
                completed: true,
                initialized: false
            }
        case CLEAR:
            return {
                ...state,
                article: {},
                articles: []
            }
        default:
            return state;
    }
}