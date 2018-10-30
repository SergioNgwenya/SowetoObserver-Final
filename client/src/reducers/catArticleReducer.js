import {FETCH_ARTICLES_BY_CATEGORY} from '../actions/types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_ARTICLES_BY_CATEGORY:
        return action.payload || false;
         default:
        return state;
    }
}