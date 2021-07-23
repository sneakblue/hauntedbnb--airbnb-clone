import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateHaunt } from '../../store/haunts';

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
        <div>
            <h2>Edit Haunt Component</h2>
            <form
                onSubmit={handleSubmit}
            >
                <ul className='errors'>
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        name='address'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='state'>State</label>
                    <input
                        type='text'
                        name='state'
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        name='country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='lat'>Lattitude</label>
                    <input
                        type='decimal'
                        name='lat'
                        value={lat}
                        onChange={e => setLat(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='lng'>Longitude</label>
                    <input
                        type='decimal'
                        name='lng'
                        value={lng}
                        onChange={e => setLng(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price per Night</label>
                    <input
                        type='decimal'
                        name='price'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='activity'>Paranormal Activity level</label>
                    <input
                        type='number'
                        name='activity'
                        value={activity}
                        onChange={e => setActivity(e.target.value)}
                    />
                </div>
                {/* <div>
                    <label htmlFor='image'>Image URL</label>
                    <input
                        type='text'
                        name='image'
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </div> */}
                <button type='submit'>Submit Changes</button>
            </form>
        </div>
    )
}
