import { csrfFetch } from "./csrf";

const CREATE = 'reviews/CREATE';
const LOAD_REVIEWS = 'reviews/LOAD';
const UPDATE = 'reviews/UPDATE';
const DELETE = 'reviews/DELETE';

const initialState = {};

export default function reviewsReducer (state = initialState, action) {
    switch(action.type) {
        case CREATE: {
            return {
                ...state,
                [action.review.newReview.id]: {...action.review.newReview}
            }
        }
        case LOAD_REVIEWS: {
            const newReviews = {};
            action.reviews.forEach(review => {
                newReviews[review.id] = review;
            })
            return { ...state, ...newReviews};
        }
        case UPDATE: {
            return {
                ...state,
                [action.review.updatedReview.id]: {
                    ...action.review.updatedReview
                }
            }
        }
        case DELETE: {
            const newState = {...state};
            delete newState[action.id]
            return newState;
        }
        default: {
            return state;
        }
    }
}

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
});

const createReview = (review) => ({
    type: CREATE,
    review
});

const update = (review) => ({
    type: UPDATE,
    review
});

const deleteReview = (id) => ({
    type: DELETE,
    id
})

export const getReviews = (id) => async dispatch => {
    const response = await csrfFetch('/api/reviews');

    if (response.ok) {
        const reviews = await response.json();

        dispatch(loadReviews(reviews.reviews));
    }
};

export const postReview = (newReview) => async dispatch => {
    const { userId, hauntId, review, rating} = newReview;
    const response = await csrfFetch('/api/reviews/create', {
        method: 'POST',
        body: JSON.stringify({ userId, hauntId, review, rating })
    });
    if (response.ok) {
        const createdReview = await response.json();
        dispatch(createReview(createdReview));
        return createdReview;
    }
}

export const updateReview = (editedReview) => async dispatch => {
    const { id, userId, hauntId, review, rating } = editedReview;
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ userId, hauntId, review, rating })
    });
    if (response.ok) {
        const editedResponse = await response.json();
        dispatch(update(editedResponse));
        return editedResponse;
    }
}

export const removeReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteReview(id));
    }
}
