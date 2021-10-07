import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newBooking, findBookings, removeBooking } from '../../store/bookings';

import "react-datepicker/dist/react-datepicker.css";
import './Bookings.css';

const dateFormatter = (date) => {
    let newDate = date.split('');
    let year = '';
    let month = '';
    let day = '';
    for (let i = 0; i < 5; i++) {
        if (i === 4) {
            newDate.shift();
            continue;
        }
        year += newDate.shift();
    }
    for (let i = 0; i < 3; i++) {
        if (i === 2) {
            newDate.shift();
            continue;
        }
        month += newDate.shift();
    }
    for (let i = 0; i < 2; i++) {
        day += newDate.shift();
    }
    console.log(year);
    console.log(month);
    console.log(day);
    
}

export default function Bookings ({ hauntId }) {
    const [ startDate, setStartDate ] = useState(new Date());
    const [ endDate, setEndDate ] = useState( new Date());
    const [ hasBooking, setHasBooking ] = useState( false );
    const [ currBooking, setCurrBooking ] = useState({});
    const dispatch = useDispatch();
    const currUser = useSelector(state => state.session.user);
    const bookings = useSelector(state => Object.values(state.bookings));

    useEffect(() => {

    }, [hasBooking])

    useEffect(() => {
        dispatch(findBookings());
    }, [dispatch])

    useEffect(() => {
        bookings.forEach(booking => {
            if (booking.userId === currUser.id) {
                setHasBooking(true);
                setCurrBooking(booking);
            }
        })
    }, [bookings, currUser.id])

    const handleBooking = async () => {
        const newBook = {
            hauntId,
            userId: currUser.id,
            startDate,
            endDate
        }
        dispatch(newBooking(newBook))
    }

    const handleEdit = async () => {

    }

    const handleDelete = async () => {
        await dispatch(removeBooking(currBooking.id));
        setHasBooking(false);
    }

    let content = null;

    if (hasBooking) {
        const currStart = currBooking.startDate.slice(0, 10);
        if (typeof currStart === 'string') console.log(currStart)
        dateFormatter(currStart)
        const currEnd = currBooking.endDate.slice(0, 10);
        content = (
            <>
                <h3>Your Booking</h3>
                <div className='currBooking-div'>
                    <h5>Start</h5>
                    <h5>{currStart}</h5>
                </div>
                <div className='currBooking-div'>
                    <h5>End</h5>
                    <h5>{currEnd}</h5>
                </div>
                <div className='booking-edit-delete-btns'>
                    <button className='booking-btns' onClick={handleEdit}>Edit Booking</button>
                    <button className='booking-btns' onClick={handleDelete}>Delete Booking</button>
                </div>
            </>
        )
    } else {
        content = (
            <>
                <h2>Book Your Stay</h2>
                <div className='date-div'>
                    <h5>Start Date</h5>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <h5>End Date</h5>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    <button className='bookings-btn' onClick={handleBooking}>Book</button>
                </div>
            </>
        )
    }

    return (
        <div className='bookings-main--div'>
            {content}
        </div>
    )
}
