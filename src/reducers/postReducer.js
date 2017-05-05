import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/actions';

const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DELETE_POST': 
            return _.omit(state, action.payload)
        case 'FETCH_POST':
            return { ...state, post: action.payload.data }
        case 'FETCH_POSTS':
            return { ...state, all: action.payload.data }
        default:
            return state;
    }
}