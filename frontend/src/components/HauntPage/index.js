import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHaunts, removeHaunt } from "../../store/haunts";
import { getReviews } from "../../store/reviews";
import EditHaunt from "../EditHaunt";
import Bookings from '../Bookings';
import Reviews from "../Reviews";
import defaultImg from '../../images/house.jpg';
import batGif from '../../images/bat.gif';
import './HauntPage.css';

export default function HauntPage () {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [isUser, setIsUser] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const haunt = useSelector(state => state.haunts[id]);
    const [image, setImage] = useState(defaultImg);
    const [loading, setLoading] = useState(true);
    const currUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews));

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {

    },[reviews]);

    useEffect(() => {
        if (haunt?.imgUrl.length > 0) {
            setImage(haunt.imgUrl[0]);
        }
    }, [haunt])

    useEffect(() => {
        dispatch(getHaunts());
        dispatch(getReviews(id));
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [dispatch, id]);

    if (!haunt) {
        return null;
    }

    const hauntReviews = [];
    reviews.forEach(review => {
        if (review.hauntId === haunt.id) {
            hauntReviews.push(review)
        }
    });

    if (currUser && haunt.userId === currUser.id) {
        if (!isUser) {
            setIsUser(true);
        }
    }

    const deleteHaunt = async () => {
        await dispatch(removeHaunt(id));
        history.push('/haunts');
    }

    let content = null;

    if (showForm) {
        content = (
            <EditHaunt haunt={haunt} setShowForm={setShowForm}/>
        )
    } else {
        content =(
            <>
            </>
        )
    }

    let paranormalRating = '';
    for (let i = 0; i < haunt.activity; i++) {
        paranormalRating += '👻'
    }

    let comfortRating = '';
    if (hauntReviews.length > 0) {
        let sumRating = 0;
        for (let i = 0; i < hauntReviews.length; i++) {
            sumRating += hauntReviews[i].rating;
        }
        let avgRating = sumRating / hauntReviews.length;
        for (let i = 0; i < avgRating; i++) {
            comfortRating += '⭐';
        }
    } else {
        comfortRating = 'No Reviews Yet!';
    }

    const onError = () => {
        setImage(defaultImg);
    }

    let mainContent = null;
    if (loading) {
        mainContent = (
            <div className="loading-div">
                <img className="loading-img" src={batGif}/>
            </div>
        )
    } else {
        mainContent = (
            <>
                <div className='haunt-title'>
                    <h1>{haunt.name}</h1>
                </div>
                <div className='haunt-img-div'>
                    <img src={image} alt='haunt' onError={onError} className='haunt-img'/>
                </div>
                <div className='haunt-details-div'>
                    <div className='haunt-details-detail'>
                        <p>{haunt.address}, {haunt.city}, {haunt.state}, {haunt.country}</p>
                    </div>
                    <div className='haunt-details-detail'>
                        <p>${haunt.price} / Night</p>
                    </div>
                    <div className='haunt-details-detail'>
                        <p>Paranormal Activity rating: {paranormalRating}</p>
                    </div>
                    <div className='haunt-details-detail'>
                        <p>Comfort Rating: {comfortRating}</p>
                    </div>
                    <div className='haunt-details-detail'>
                        <p>{haunt.description}</p>
                    </div>
                    {isUser && (
                        <div>
                            <button className='haunt-details-btn' onClick={() => showForm === true ? setShowForm(false) : setShowForm(true)}>Edit</button>
                            <button className='haunt-details-btn' onClick={deleteHaunt}>Delete Haunt</button>
                        </div>
                    )}
                    {content}
                    <Bookings hauntId={id}/>
                </div>
                <Reviews haunt={haunt} hauntReviews={hauntReviews}/>
            </>
        )
    }

    return (
        <div className='main-haunt-div'>
            {mainContent}
        </div>
    )
}
