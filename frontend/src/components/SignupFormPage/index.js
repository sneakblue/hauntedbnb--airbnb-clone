import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';

export default function SignupFormPage () {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors)
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);

    }
    return (
        <div className='signup-main-div'>
            <form
                className='signup-form'
                onSubmit={handleSubmit}
            >
                <h2>Signup</h2>
                <ul>
                    {errors.map((error, i) => <li key={i} className='error'>{error}</li>)}
                </ul>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    className='signup-form-input'
                    name='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    className='signup-form-input'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor='password'>password</label>
                <input
                    type='password'
                    className='signup-form-input'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    type='password'
                    className='signup-form-input'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
