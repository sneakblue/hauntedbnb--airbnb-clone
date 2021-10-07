import { csrfFetch } from "./csrf";

const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS';
const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const UPDATE = 'bookings/UPDATE';
const DELETE = 'bookings/DELETE';

const initialState = {};

export default function bookingsReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_BOOKINGS: {

        }
        default: {
            return state;
        }
    }
}
