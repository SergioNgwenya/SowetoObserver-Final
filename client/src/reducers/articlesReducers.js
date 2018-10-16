import { FETCH_ARTICLES } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return action.payload || false;
        default:
            return state;
    }
}