import {combineReducers} from 'redux';
import authReducer from './authReducer';
import articlesReducers from "./articlesReducers";
import categoryReducer from "./categoryReducer";
import articleRed from './articleReducer';
import videoReducers from "./videoReducers";
import videoReducer from "./videoReducer";

export default combineReducers({
    auth: authReducer,
    articles: articlesReducers,
    category: categoryReducer,
    article: articleRed,
    video:videoReducer,
    videos:videoReducers

});