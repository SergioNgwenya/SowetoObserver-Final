import {
    FETCH_ARTICLES
} from './types';


export const _fetchArticles = () => async dispatch => {
    try {
        const res = await fetch('/api/articles');
        const data = await res.json();;
        dispatch({ type: FETCH_ARTICLES, payload: data });
    } catch (err) {
        console.error(err)
    }
};



// export const _fetchArticle = (category) => async dispatch => {
//     const res = await fetch('/api/articles/?category=' + category);
//     const data = await res.json();;
//     dispatch({ type: FETCH_ARTICLE, payload: data });
// };