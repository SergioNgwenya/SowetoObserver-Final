import { FETCH_CATEGORY, FETCH_USER, FETCH_ARTICLE,GET_RES  } from './types';
import { _fetchArticles } from './article';


export const fetchArticles = _fetchArticles;


export const fetchUser = () => async dispatch => {
    const res = await fetch('/auth/current-user', { credentials: 'include' });
    const data = await res.json();
    dispatch({ type: FETCH_USER, payload: data.user });
};


export const fetchCategory = () => async dispatch => {
    try {
        const res = await fetch('/api/category');
        const data = await res.json();
        //console.log("category", data);
        dispatch({ type: FETCH_CATEGORY, payload: data });
    } catch (err) {
        console.error(err)
    }
};

export const fetchArticle = (id) => async dispatch => {
   
    const res = await fetch('/api/articles/'+ id );
    const data = await res.json();
 console.log('ID',data)
    dispatch({ type: FETCH_ARTICLE, payload: data });
};

//delete article using id
export const _deleteArticle = (id) => async dispatch => {
    const res = await fetch('/api/articles/' + id, {
        method: "DELETE"
    });
    const data = await res.json();
    dispatch({ type: GET_RES, payload: data })
};