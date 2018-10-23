import {
    FETCH_VIDEOS
} from './types';


export const _fetchVideos = () => async dispatch => {
    try {
        const res = await fetch('/api/videos');
        const data = await res.json();;
        dispatch({ type: FETCH_VIDEOS, payload: data });
    } catch (err) {
        console.error(err)
    }
};



// export const _fetchArticle = (category) => async dispatch => {
//     const res = await fetch('/api/articles/?category=' + category);
//     const data = await res.json();;
//     dispatch({ type: FETCH_ARTICLE, payload: data });
// };