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
                <div className='dropdown-container'>
                    <ProfileButton user={sessionUser} />
                </div>
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
        <div className='navbar-container'>
            <div className='logo'>
                <h4>Logo</h4>
            </div>
            <nav className='navbar'>
                <NavLink exact to='/haunts' className='nav-btn'>Home</NavLink>
                {isLoaded && sessionLinks}
            </nav>
        </div>
    );
}
