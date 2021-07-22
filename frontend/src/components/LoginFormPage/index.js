import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css';

export default function LoginFormPage () {
    const currUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (currUser) return (
        <Redirect to='/' />
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const handleDemo = () => {
        return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password'}))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
    }

    return (
        <div className='login-main-div'>
            <div className='login-div'>
                <h2>Login</h2>
                <form
                    className='login-form'
                    onSubmit={handleSubmit}
                >
                    <ul>
                        {errors.map((error, i) => <li key={i} className='login-error'>{error}</li>)}
                    </ul>
                    <label htmlFor='username'>Username: </label>
                    <input
                        name='username'
                        type='text'
                        className='login-input'
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                    />
                    <label htmlFor='password'>Password: </label>
                    <input
                        name='password'
                        type='password'
                        className='login-input'
                        value={password}
                        onChange={((e) => setPassword(e.target.value))}
                    />
                    <div className='login-btns'>
                        <button type='submit' className='login-btn'>Log In</button>
                        <button
                            type='button'
                            className='login-btn'
                            onClick={handleDemo}
                        >Demo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
