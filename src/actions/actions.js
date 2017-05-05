import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

var API_URL = 'http://reduxblog.herokuapp.com/api';
var KEY_URL = '?key=123kfjgfjgldk';

export function fetchPosts() {
    const url = `${API_URL}/posts${KEY_URL}`;
    const request = axios.get(url);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values) {
    const request = axios.post(`${API_URL}/posts${KEY_URL}`, values);
    return {
        type: CREATE_POST, 
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${API_URL}/posts/${id}${KEY_URL}`)
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id) {
    const request = axios.delete(`${API_URL}/posts/${id}${KEY_URL}`)
    return {
        type: DELETE_POST,
        payload: request
    }
}