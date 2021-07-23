import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../store/reviews';

export default function EditReview ({ selectedReview }) {
    const dispatch = useDispatch();
    const [review, setReview] = useState(selectedReview.review);
    const [rating, setRating] = useState(selectedReview.rating);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (review.length === 0) {
            errors.push('Must write a review before submitting');
        }
        setErrors(errors);
    }, [review])

    const handleSubmit = () => {
        if (errors.length === 0) {
            const newReview = {
                id: selectedReview.id,
                userId: selectedReview.userId,
                hauntId: selectedReview.hauntId,
                review,
                rating
            };
            dispatch(updateReview(newReview));
        }
    }

    return (
        <>
            <h2>Edit Review Component</h2>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor='review'>Write a review:</label>
                    <textarea
                        name='review'
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='rating'>Rate:</label>
                    <select
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
                <button type='submit'>Submit Review</button>
            </form>
        </>
    )
}
