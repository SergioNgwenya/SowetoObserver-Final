import {combineReducers} from 'redux';
import authReducer from './authReducer';
import articlesReducers from "./articlesReducers";
import categoryReducer from "./categoryReducer";
import articleRed from './articleReducer';
import advertReducer from './advertReducer';
import catRed from './catReducer';
import adverts from './advertsRedcuer';
import articleCatRed from './catArticleReducer'; 

import videoReducer from './videoReducer'
import videosReducer from './videosReducers';


export default combineReducers({
    auth: authReducer,
    articles: articlesReducers,
    category: categoryReducer,
    article: articleRed,
    advert: advertReducer,
    cat:catRed,
    adverts:adverts,
    video:videoReducer,
    videos:videosReducer,
    articleCat : articleCatRed
    
});