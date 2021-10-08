import { csrfFetch } from "./csrf";

const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS';
const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const UPDATE = 'bookings/UPDATE';
const DELETE = 'bookings/DELETE';

const initialState = {};

export default function bookingsReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_BOOKINGS: {
            const newState = {...state};
            action.bookings.bookings.forEach(booking => {
                newState[booking.id] = booking;
            });
            return newState;
        }
        case CREATE_BOOKING: {
            const newState = {...state};
            newState[action.booking.booking.id] = action.booking.booking;
            return newState;
        }
        case UPDATE: {
            const newState = {...state};
            newState[action.booking.updatedBooking.id] = action.booking.updatedBooking;
            return newState;
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

const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings
})

const createBooking = (booking) => ({
    type: CREATE_BOOKING,
    booking
});

const update = booking => ({
    type: UPDATE,
    booking
});

const deleteBooking = id => ({
    type: DELETE,
    id
});

export const newBooking = (booking) => async dispatch => {
    const { hauntId, userId, startDate, endDate } = booking;
    const bookingResponse = await csrfFetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify({ hauntId, userId, startDate, endDate })
    });
    if(bookingResponse.ok) {
        const createdBooking = await bookingResponse.json();
        dispatch(createBooking(createdBooking));
        return createdBooking;
    };
};

export const findBookings = () => async dispatch => {
    const bookingsRes = await csrfFetch('/api/bookings');
    if (bookingsRes.ok) {
        const bookings = await bookingsRes.json();
        dispatch(loadBookings(bookings));
        return bookings;
    };
};

export const updateBooking = (booking) => async dispatch => {
    const { id, hauntId, userId, startDate, endDate } = booking;
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ hauntId, userId, startDate, endDate })
    });

    if (response.ok) {
        const updatedBooking = await response.json();
        dispatch(update(updatedBooking));
        return updatedBooking;
    };
};

export const removeBooking = (id) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteBooking(id));
    };
};
