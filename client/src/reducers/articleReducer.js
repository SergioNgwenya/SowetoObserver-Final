import { FETCH_ARTICLE } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case FETCH_ARTICLE:
            return action.payload || false;
        default:
            return state;
    }
}