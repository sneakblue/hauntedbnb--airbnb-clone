import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postReview } from "../../store/reviews";

export default function CreateReview ({haunt, currUser, hauntReviews}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (review.length === 0) {
            errors.push('Must write a review before submitting');
        }
        setErrors(errors);
    }, [review])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(errors.length === 0) {
            const newReview = {
                userId: currUser.id,
                hauntId: haunt.id,
                review,
                rating
            }
            dispatch(postReview(newReview));
            history.push(`/haunts/${haunt.id}`);
        }

    }

    return (
        <div className='submit-review-main-div'>
            <h2>Submit a Review</h2>
            <ul className='errors'>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <form
                className='submit-review-form'
                onSubmit={handleSubmit}
            >
                <div className='submit-review-write-div'>
                    <label htmlFor='review' className='submit-review-write-label'>Write a review:</label>
                    <textarea
                        name='review'
                        className='submit-review-textarea-input'
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    />
                </div>
                <div className='submit-review-rate-div'>
                    <label htmlFor='rating'>Rate:</label>
                    <select
                        className='submit-review-rating-input'
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <div className='submit-review-btn-div'>
                    <button type='submit' className='submit-review-btn'>Submit Review</button>
                </div>
            </form>
        </div>
    )
}
