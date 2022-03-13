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

    const handleDelete = async (reviewId) => {
        await dispatch(removeReview(reviewId))
        setHasReview(false);
    }

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
            <EditReview selectedReview={selectedReview} setShowEdit={setShowEdit} />
        )
    } else {
        content = (
            <>
            </>
        )
    }

    return (
        <div className='reviews-main-div'>
            <h2 className='reviews_title_h2'>Haunt Reviews</h2>
            {(currUser && !hasReview) && (
                <CreateReview
                    haunt={haunt}
                    currUser={currUser}
                    hauntReviews={hauntReviews}
                />
            )}
            {!currUser && (
                <div>
                    <h3>Login to write a review!</h3>
                </div>
            )}
            <div className='reviews-list-container'>
                {hauntReviews.map(review => {
                    let rating = '';
                    for (let i = 0; i < review.rating; i++) {
                        rating += '⭐'
                    }
                    return (
                        <div key={review.id} className='single-review-div'>
                            <p className='review-text'>{review.review}</p>
                            <h4 className='review-rating'>{`Rating: ${rating}`}</h4>
                            {currUser && review.userId === currUser.id && (
                                <>
                                    <div className='review-edit-delete-div'>
                                        <button className='review-edit-btn' onClick={() => showEdit === true ? setShowEdit(false) : setShowEdit(true)}>Edit</button>
                                        <button className='review-edit-btn' onClick={() => handleDelete(review.id)}>Delete Review</button>
                                    </div>
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
