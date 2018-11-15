import { DELETE_VIDEO } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case DELETE_VIDEO:
            return action.payload || false;
        default:
            return state;
    }
}