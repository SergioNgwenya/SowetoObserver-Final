import { FETCH_VIDEO } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case FETCH_VIDEO:
            return action.payload || false;
        default:
            return state;
    }
}