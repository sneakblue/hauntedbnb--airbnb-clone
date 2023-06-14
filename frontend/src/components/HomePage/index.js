import { useEffect, useState } from 'react';
import { getHaunts } from '../../store/haunts';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { getReviews } from '../../store/reviews';
import HauntTile from '../HauntTile';
import './HomePage.css';

export default function HomePage () {
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(true);
    const haunts = useSelector(state => Object.values(state.haunts));
    useEffect(() => {
        dispatch(getHaunts());
        dispatch(getReviews());

        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [dispatch])

    let content;
    if (!loading) {
        content = (
            <>
                <div className='title-div'>
                    <h1>Current Haunts</h1>
                </div>
                <div className='hauntTile-container'>
                    {haunts.map((haunt) => {
                        return <HauntTile haunt={haunt} key={haunt.id}/>
                    })}
                </div>
            </>
        )
    } else {
        content = (
            <>
                <div className='loading-div'>
                    <ReactLoading
                        type={"spinningBubbles"}
                        color={'#F7F9F9'}
                        height={150}
                        width={150}
                    />
                </div>

            </>
        )
    }

    return (
        <div className='main-home-div'>
            {/* <div className='title-div'>
                <h1>Current Haunts</h1>
            </div>
            <div className='hauntTile-container'>
                {haunts.map((haunt) => {
                    return <HauntTile haunt={haunt} key={haunt.id}/>
                })}
            </div> */}
            {content}
        </div>
    )
}
