import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { newHaunt } from "../../store/haunts";
import './CreateHaunt.css';

export default function CreateHaunt () {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [price, setPrice] = useState('');
    const [activity, setActivity] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

    if(!sessionUser) {
        history.push('/login');
    }

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
            errors.push('Must provide a description')
        }
        if (activity <= 0) {
            errors.push('Must provide a Paranormal Activity level');
        }
        setErrors(errors);
    }, [name, address, city, state, country, lat, lng, price, description, activity])

    const handleImage = () => {
        images.push(image);
        setImages(images);
        setImage('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.length > 0) {
            const createdHaunt = {
                userId: sessionUser.id,
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
                images
            }
            dispatch(newHaunt(createdHaunt));
            history.push('/haunts');
        }
    }

    return (
        <div className='create-main-div'>
            <h2 className='create-title'>Create a Haunt</h2>
            <form
                onSubmit={handleSubmit}
                className='create-form'
            >
                <ul className='errors'>
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul>
                <div className='input-div'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        name='address'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor='state'>State</label>
                    <input
                        type='text'
                        name='state'
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        name='country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor='lat'>Lattitude</label>
                    <input
                        type='decimal'
                        name='lat'
                        value={lat}
                        onChange={e => setLat(e.target.value)}
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor='lng'>Longitude</label>
                    <input
                        type='decimal'
                        name='lng'
                        value={lng}
                        onChange={e => setLng(e.target.value)}
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor='price'>Price per Night</label>
                    <input
                        type='decimal'
                        name='price'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='input-div-activity'>
                    <label htmlFor='activity'>Paranormal Activity level</label>
                    <select
                        type='number'
                        name='activity'
                        value={activity}
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
                <div className='image-input'>
                    <label htmlFor='image'>Images</label>
                    <ul className='image-input-list'>
                        {images.map((image, i) => {
                            return (
                                <>
                                    <li key={i + image}>{image}</li>
                                </>
                            )
                        })}
                    </ul>
                    <input
                        type='text'
                        name='image'
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                    <button type='button' onClick={handleImage}>Add photo</button>
                </div>
                <button type='submit'>Create Haunt</button>
            </form>
        </div>
    )
}
