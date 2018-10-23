import { FETCH_ADVERTS } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case FETCH_ADVERTS:
            return action.payload || false;
        default:
            return state;
    }
}