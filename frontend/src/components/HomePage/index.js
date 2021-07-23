import { useEffect } from 'react';
import { getHaunts } from '../../store/haunts';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
// import * as sessionActions from '../../store/session';
// import { getAllHaunts } from '../../store/haunts';
import HauntTile from '../HauntTile';
import './HomePage.css';

export default function HomePage () {
    // const currUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const haunts = useSelector(state => Object.values(state.haunts));
    useEffect(() => {
        dispatch(getHaunts());
        dispatch(getReviews());
    }, [dispatch])

    return (
        <div className='main-home-div'>
            <div className='title-div'>
                <h1>Current Haunts</h1>
            </div>
            <div className='hauntTile-container'>
                {haunts.map((haunt) => {
                    return <HauntTile haunt={haunt} key={haunt.id}/>
                })}
            </div>
        </div>
    )
}
