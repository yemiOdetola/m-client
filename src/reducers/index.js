import { combineReducers } from 'redux';
import articlesReducer from './articles';
import authReducer from './auth';

export default combineReducers({
    articles: articlesReducer,
    auth: authReducer
});