import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateHaunt } from '../../store/haunts';
import './EditHaunt.css';

export default function EditHaunt ({ haunt }) {
    const [name, setName] = useState(haunt.name);
    const [address, setAddress] = useState(haunt.address);
    const [city, setCity] = useState(haunt.city);
    const [state, setState] = useState(haunt.state);
    const [country, setCountry] = useState(haunt.country);
    const [lat, setLat] = useState(haunt.lat);
    const [lng, setLng] = useState(haunt.lng);
    const [price, setPrice] = useState(haunt.price);
    const [description, setDescription] = useState(haunt.description);
    const [activity, setActivity] = useState(haunt.activity);
    // const [image, setImage] = useState(haunt.imgUrl[0]);
    const [errors, setErrors] = useState([]);
    // const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const errors = [];
        if (name.length < 3) {
            errors.push('Name must be 3 or more characters');
        } else if (name.length === 0) {
            errors.push('Must provide a name');
        }
        if (address.length === 0) {
            errors.push('Must provide an address');
        }
        if (city.length === 0) {
            errors.push('Must provide a city');
        }
        if (state.length === 0) {
            errors.push('Must provide a state or province');
        }
        if (country.length === 0) {
            errors.push('Must provide a country');
        }
        if (lat.length === 0) {
            errors.push('Must provide a lattitude');
        }
        if (lng.length === 0) {
            errors.push('Must provide a longitude');
        }
        if (price <= 0) {
            errors.push('Must provide a price higher than zero');
        }
        if (description.length <= 0) {
            errors.push('Must provide a description');
        }
        if (activity <= 0) {
            errors.push('Must provide a Paranormal Activity level');
        }
        setErrors(errors);
    }, [name, address, city, state, country, lat, lng, price, description, activity])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.length > 0) {
            const updatedHaunt = {
                userId: haunt.userId,
                name,
                address,
                city,
                state,
                country,
                lat,
                lng,
                price,
                description,
                activity,
                id: haunt.id
            }
            dispatch(updateHaunt(updatedHaunt));
            setErrors([]);
        }
    }

    return (
        <div className='edit-haunt-main-div'>
            <h2>Edit Haunt</h2>
            <form
                className='edit-haunt-form'
                onSubmit={handleSubmit}
            >
                <ul className='errors'>
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul>
                <div className='edit-input-div'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        className='edit-haunt-input'
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        name='address'
                        value={address}
                        className='edit-haunt-input'
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        value={city}
                        className='edit-haunt-input'
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='state'>State</label>
                    <input
                        type='text'
                        name='state'
                        value={state}
                        className='edit-haunt-input'
                        onChange={e => setState(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        name='country'
                        value={country}
                        className='edit-haunt-input'
                        onChange={e => setCountry(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='lat'>Lattitude</label>
                    <input
                        type='number'
                        name='lat'
                        value={lat}
                        className='edit-haunt-input'
                        onChange={e => setLat(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='lng'>Longitude</label>
                    <input
                        type='number'
                        name='lng'
                        value={lng}
                        className='edit-haunt-input'
                        onChange={e => setLng(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='price'>Price per Night</label>
                    <input
                        type='number'
                        name='price'
                        value={price}
                        className='edit-haunt-input'
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        className='edit-haunt-textarea'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='edit-input-div'>
                    <label htmlFor='activity'>Paranormal Activity level</label>
                    <select
                        type='number'
                        name='activity'
                        value={activity}
                        className='edit-haunt-input'
                        onChange={e => setActivity(e.target.value)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <button className='edit-haunt-btn' type='submit'>Submit Changes</button>
            </form>
        </div>
    )
}
