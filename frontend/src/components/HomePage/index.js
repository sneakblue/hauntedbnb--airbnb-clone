import { useEffect, useState } from 'react';
import { getHaunts } from '../../store/haunts';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './HomePage.css';

export default function HomePage () {
    const currUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const haunts = useSelector(state => state.haunts);
    // const images = useSelector(state => state.images);

    useEffect(() => {
        dispatch(getHaunts());
        // dispatch(getImages());
    }, [dispatch])

    let hauntTiles;
    // if (haunts) {
    //     for (let haunt in haunts) {
    //         let imageUrl;
    //         for (let image in images) {
    //             if (image.hauntId === haunt.id) {
    //                 imageUrl = image.url;
    //             };
    //         };
    //         hauntTiles = (
    //             <div key={haunt.id}>
    //                 <img src={imageUrl} alt={haunt.name} />
    //             </div>

    //         )
    //     }
    // }

    return (
        <>
            <h1>HomePage</h1>
        </>
    )
}
