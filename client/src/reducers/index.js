import {combineReducers} from 'redux';
import authReducer from './authReducer';
import articlesReducers from "./articlesReducers";
import categoryReducer from "./categoryReducer";
import articleRed from './articleReducer';
import advertReducer from './advertReducer';

export default combineReducers({
    auth: authReducer,
    articles: articlesReducers,
    category: categoryReducer,
    article: articleRed,
    advert: advertReducer
});