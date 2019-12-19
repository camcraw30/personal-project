import axios from 'axios';

const initialState = {
    reviews: [],
};

const GET_ALL = 'GET_ALL';
const ADD_REVIEW = 'ADD_REVIEW';
const EDIT_REVIEW = 'EDIT_REVIEW';
const DELETE_REVIEW = 'DELETE_REVIEW';

export function getAll(prodId) {
    return {
        type: GET_ALL,
        payload: axios.get(`/api/reviews/${prodId}`)
    }
}

export function addReview(newReview) {
    return {
        type: ADD_REVIEW,
        payload: axios.post('/api/reviews', newReview)
    }
}

export function editReview(prodId, revId, editedReview) {
    return {
        type: EDIT_REVIEW,
        payload: axios.put(`/api/reviews/${prodId}/${revId}`, editedReview)
    }
}

export function deleteReview(prodId, revId) {
    return {
        type: DELETE_REVIEW,
        payload: axios.delete(`/api/reviews/${prodId}/${revId}`)
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case `${GET_ALL}_FULFILLED`:
            return {
                reviews: payload.data
            }
        case `${ADD_REVIEW}_FULFILLED`:
            return {
                reviews: payload.data
            }
        case `${EDIT_REVIEW}_FULFILLED`:
            return {
                reviews: payload.data
            }
        case `${DELETE_REVIEW}_FULFILLED`:
            return {
                reviews: payload.data
            }
        default: return state;
    }
}