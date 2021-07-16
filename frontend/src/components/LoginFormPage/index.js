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
    return (
        <div className='login-main-div'>
            <h2>Login Page</h2>
            <div className='login-div'>
                <form
                    className='login-form'
                    onSubmit={handleSubmit}
                >
                    <ul>
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>
                    <label htmlFor='username'>Username</label>
                    <input
                        name='username'
                        type='text'
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        value={password}
                        onChange={((e) => setPassword(e.target.value))}
                    />
                    <button type='submit'>Log In</button>
                </form>
            </div>
        </div>
    )
}
