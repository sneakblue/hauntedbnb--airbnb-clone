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
            action.bookings.forEach(booking => {
                newState[booking.id] = booking;
            });
            return newState;
        }
        case CREATE_BOOKING: {
            const newState = {...state};
            newState[action.booking.booking.id] = action.booking.booking;
            return newState;
        }
        default: {
            return state;
        }
    }
}

const createBooking = (booking) => ({
    type: CREATE_BOOKING,
    booking
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
