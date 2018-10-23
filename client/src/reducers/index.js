import {combineReducers} from 'redux';
import authReducer from './authReducer';
import articlesReducers from "./articlesReducers";
import categoryReducer from "./categoryReducer";
import articleRed from './articleReducer';
import advertReducer from './advertReducer';
import catRed from './catReducer';
import adverts from './advertsRedcuer';

export default combineReducers({
    auth: authReducer,
    articles: articlesReducers,
    category: categoryReducer,
    article: articleRed,
    advert: advertReducer,
    cat:catRed,
    adverts:adverts,

});