import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newBooking } from '../../store/bookings';

import "react-datepicker/dist/react-datepicker.css";
import './Bookings.css';

export default function Bookings ({ hauntId }) {
    const [ startDate, setStartDate ] = useState(new Date());
    const [ endDate, setEndDate ] = useState( new Date());
    const dispatch = useDispatch();
    const currUser = useSelector(state => state.session.user);

    const handleBooking = async () => {
        const newBook = {
            hauntId,
            userId: currUser.id,
            startDate,
            endDate
        }
        dispatch(newBooking(newBook))
    }

    return (
        <div className='bookings-main--div'>
            <h2>Book Your Stay</h2>
            <div className='date-div'>
                <h5>Start Date</h5>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <h5>End Date</h5>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                <button className='bookings-btn' onClick={handleBooking}>Book</button>
            </div>
        </div>
    )
}
