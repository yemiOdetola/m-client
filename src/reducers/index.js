import { combineReducers } from 'redux';
import articleReducer from './articles';
import authReducer from './auth';

export default combineReducers({
    articles: articleReducer,
    auth: authReducer
});