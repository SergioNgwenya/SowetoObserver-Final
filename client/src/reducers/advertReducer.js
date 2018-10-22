import {FETCH_ADVERT} from '../actions/types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_ADVERT:
        return action.payload || false;
         default:
        return state;
    }
}