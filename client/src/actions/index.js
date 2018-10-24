import { FETCH_CATEGORY, FETCH_USER, FETCH_ARTICLE,GET_RES,FETCH_CAT, FETCH_ADVERT,FETCH_ADVERTS,FETCH_VIDEO,FETCH_VIDEOS } from './types';
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
        
        dispatch({ type: FETCH_CATEGORY, payload: data });
    } catch (err) {
        console.error(err)
    }
};
//Fetching all adverts
export const fetchAdverts = () => async dispatch => {
    try {
        const res = await fetch('/api/advert');
        const data = await res.json();
        
        dispatch({ type: FETCH_ADVERTS, payload: data });
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




export const fetchAdvert = (id) => async dispatch => {
   
    const res = await fetch('/api/advert/'+ id );
    const data = await res.json();
 console.log('ID',data)
    dispatch({ type: FETCH_ADVERT, payload: data });
};

//delete article using id
export const _deleteArticle = (id) => async dispatch => {
    const res = await fetch('/api/articles/' + id, {
        method: "DELETE"
    });
    const data = await res.json();
    dispatch({ type: GET_RES, payload: data })
};

//deleting Category using id
export const _deleteCategory = (id) => async dispatch => {
    const res = await fetch('/api/category/' + id, {
        method: "DELETE"
    });
    const data = await res.json();
    
    dispatch({ type: GET_RES, payload: data })
};

//Getiing single category by id
export const fetchCat= (id) => async dispatch => {
   
    const res = await fetch('/api/category/'+ id );
    const data = await res.json();
 
    dispatch({ type: FETCH_CAT, payload: data });
};

//FETCHING VIDEO ACTIONS
export const fetchVideo= (id) => async dispatch => {
   
    const res = await fetch('/api/video/'+ id );
    const data = await res.json();
 console.log('ID',data)
    dispatch({ type: FETCH_VIDEO, payload: data });
};

//Fetching all videos
export const fetchVideos = () => async dispatch => {
    try {
        const res = await fetch('/api/video/');
        const data = await res.json();
        
        dispatch({ type: FETCH_VIDEOS, payload: data });
    } catch (err) {
        console.error(err)
    }
};
