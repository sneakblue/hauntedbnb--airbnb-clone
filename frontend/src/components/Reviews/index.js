import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateReview from './CreateReview';
import EditReview from './EditReview';
import { removeReview } from '../../store/reviews';
import './Reviews.css';

export default function Reviews ({ haunt, hauntReviews }) {
    // const reviews = useSelector(state => Object.values(state.reviews));
    const currUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [hasReview, setHasReview] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedReview, setSelectedReview] = useState({});

    // const hauntReviews = [];
    // reviews.forEach(review => {
    //     if (review.hauntId === haunt.id) {
    //         hauntReviews.push(review)
    //     }
    // });
    if (currUser) {
        hauntReviews.forEach(review => {
            if (review.userId === currUser.id && !hasReview) {
                setHasReview(true);
                setSelectedReview(review);
            }
        });
    }

    let content;
    if (showEdit) {

        content = (
            <EditReview selectedReview={selectedReview} />
        )
    } else {
        content = (
            <>
            </>
        )
    }

    return (
        <div className='reviews-main-div'>
            <h2>Haunt Reviews</h2>
            {(currUser && !hasReview) && (
                <CreateReview
                    haunt={haunt}
                    currUser={currUser}
                    hauntReviews={hauntReviews}
                />
            )}
            <div>
                {hauntReviews.map(review => {
                    return (
                        <div key={review.id}>
                            <p>{review.review}</p>
                            <h4>{`Rating: ${review.rating}`}</h4>
                            {currUser && review.userId === currUser.id && (
                                <>
                                    <button onClick={() => showEdit === true ? setShowEdit(false) : setShowEdit(true)}>Edit Review</button>
                                    <button onClick={() => dispatch(removeReview(review.id))}>Delete Review</button>
                                    {content}
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
