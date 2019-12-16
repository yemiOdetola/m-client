import { FETCH_ARTICLES, FETCH_ARTICLE, FETCH_TAGS } from '../actions/action-constants';

const initialState = {
    articles: [],
    article: {},
    tags: []
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
        default:
            return state;
    }
}