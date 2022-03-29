import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { newHaunt } from "../../store/haunts";
import './CreateHaunt.css';

export default function CreateHaunt () {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    if(!sessionUser) {
        history.push('/login');
    }
    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [price, setPrice] = useState('');
    const [activity, setActivity] = useState(1);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);


    const checkErrors = () => {
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
        if (images.length === 0) errors.push('Must provide at least one photo');
        setErrors(errors);
        return (errors);
    }

    const handleImages = (e) => {
        const files = e.target.files;
        if (files.length === 1) setImage(e.target.files[0]);
        else setImage(null);
        setImages(files);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(image)
        let submitErrors = checkErrors();
        if (submitErrors.length === 0) {
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
                images,
                image
            }
            const res = await dispatch(newHaunt(createdHaunt));
            if (res) {
                history.push(`/haunts/${res.haunt.id}`);
            } else {
                history.push('/');
            }
        }
    }

    return (
        <div className='create-main-div'>
            <h2 className='create-title'>Create a Haunt</h2>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className='create-form'
            >
                <ul className='errors'>
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul>
                <div className='inputs-div'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='create-haunt-input'
                        type='text'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor='address'>Address</label>
                    <input
                        className='create-haunt-input'
                        type='text'
                        name='address'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <label htmlFor='city'>City</label>
                    <input
                        className='create-haunt-input'
                        type='text'
                        name='city'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <label htmlFor='state'>State</label>
                    <input
                        className='create-haunt-input'
                        type='text'
                        name='state'
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                    <label htmlFor='country'>Country</label>
                    <input
                        className='create-haunt-input'
                        type='text'
                        name='country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <label htmlFor='lat'>Lattitude</label>
                    <input
                        className='create-haunt-input'
                        type='number'
                        name='lat'
                        value={lat}
                        onChange={e => setLat(e.target.value)}
                    />
                    <label htmlFor='lng'>Longitude</label>
                    <input
                        className='create-haunt-input'
                        type='number'
                        name='lng'
                        value={lng}
                        onChange={e => setLng(e.target.value)}
                    />
                    <label htmlFor='price'>Price per Night</label>
                    <input
                        className='create-haunt-input'
                        type='number'
                        name='price'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <label htmlFor='description'>Description</label>
                    <textarea
                        className='input-textarea'
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
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
                    <label htmlFor='image'>Images</label>
                    <input
                        type='file'
                        multiple
                        name='image'
                        onChange={handleImages}
                    />
                    {/* {images.length > 0 && (
                        <ul className='image-input-list'>
                            {images.map((image, i) => {
                                return (
                                    <>
                                        <li key={i + image}>{image}</li>
                                    </>
                                )
                            })}
                        </ul>
                    )} */}
                    {/* <input
                        type='text'
                        name='image'
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    /> */}
                    {/* <button type='button' className='create-haunt-btn' onClick={(e) => image ? handleImages(e) : handleImage(e)}>Add photo</button> */}
                </div>
                <button type='submit' className='create-haunt-btn'>Create Haunt</button>
            </form>
        </div>
    )
}
