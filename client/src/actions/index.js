import { FETCH_CATEGORY, FETCH_USER, FETCH_ARTICLE,FETCH_VIDEO } from './types';
import { _fetchArticles } from './article';
import { _fetchVideos } from './video';


export const fetchArticles = _fetchArticles;
export const fetchVideos = _fetchVideos;


export const fetchUser = () => async dispatch => {
    const res = await fetch('/auth/current-user', { credentials: 'include' });
    const data = await res.json();
    dispatch({ type: FETCH_USER, payload: data.user });
};


export const fetchCategory = () => async dispatch => {
    try {
        const res = await fetch('/api/category');
        const data = await res.json();
        console.log('Category',data)
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

export const fetchVideo = (id) => async dispatch => {
   
    const res = await fetch('/api/videos/'+ id );
    const data = await res.json();
 console.log('ID',data)
    dispatch({ type: FETCH_VIDEO, payload: data });
};
