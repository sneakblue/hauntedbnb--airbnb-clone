import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';

export default function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        console.log('im opening')
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = e => {
        e.preventDefault();
        console.log('im logging out');
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu} className='nav-btn'>
                ≡ Profile
            </button>
            {showMenu && (
                <ul className='profile-dropdown'>
                    <li className='dropdown-info'>{user.username}</li>
                    <li className='dropdown-info'>{user.email}</li>
                    <li className='dropdown-info'>
                        <button onClick={logout} className='dropdown-logout-btn'>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}
