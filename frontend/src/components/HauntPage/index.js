import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHaunts, removeHaunt } from "../../store/haunts";
import { getReviews } from "../../store/reviews";
import EditHaunt from "../EditHaunt";
import Reviews from "../Reviews";
import './HauntPage.css';

export default function HauntPage () {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [isUser, setIsUser] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const haunt = useSelector(state => state.haunts[id]);
    const currUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews));


    useEffect(() => {
        dispatch(getHaunts());
        dispatch(getReviews(id));
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

    const deleteHaunt = () => {
        dispatch(removeHaunt(id));
        history.push('/haunts');
    }

    let content = null;

    if (showForm) {
        content = (
            <EditHaunt haunt={haunt} />
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
    }

    return (
        <div className='main-haunt-div'>
            <div className='haunt-title'>
                <h1>{haunt.name}</h1>
            </div>
            <div className='haunt-img-div'>
                <img src={haunt.imgUrl[0]} alt='haunt' className='haunt-img'/>
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
                        <button onClick={() => showForm === true ? setShowForm(false) : setShowForm(true)}>Edit</button>
                        <button onClick={deleteHaunt}>Delete Haunt</button>
                    </div>
                )}
                {content}
            </div>
            <Reviews haunt={haunt} hauntReviews={hauntReviews}/>
        </div>
    )
}
