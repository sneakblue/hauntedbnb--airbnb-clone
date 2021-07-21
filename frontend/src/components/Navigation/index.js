import  { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import { useSelector } from 'react-redux';
import './Navigation.css';

export default function Navigation ({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink to='/haunts/create' className='nav-btn'>Create a Haunt</NavLink>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to='/login' className='nav-btn'>Log In</NavLink>
                <NavLink to='/signup' className='nav-btn'>Sign Up</NavLink>
            </>
        );
    }
    return (
        <div className='navbar'>
            <nav>
                <NavLink exact to='/' className='nav-btn'>Home</NavLink>
                {isLoaded && sessionLinks}
            </nav>
        </div>
    );
}
