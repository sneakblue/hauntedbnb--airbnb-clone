import { Link } from 'react-router-dom';
import './HauntTile.css';
import { useSelector } from 'react-redux';

export default function HauntTile ({ haunt }) {
    const reviews = useSelector((state) => Object.values(state.reviews))

    let comfortRating = '';
    let sumRating = 0;
    let totalRating = 0;
    let averageRating = 0;
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].hauntId === haunt.id) {
            sumRating += reviews[i].rating;
            totalRating += 1;
        };
    };
    averageRating = sumRating / totalRating;
    for (let i = 0; i < averageRating; i++) {
        comfortRating += '⭐'
    }

    if (comfortRating.length === 0) {
        comfortRating = 'No Ratings'
    }

    let paranormalRating = '';
    for (let i = 0; i < haunt.activity; i++) {
        paranormalRating += '👻'
    }

    return (
        <div className='hauntTile-main-div' key={haunt.id}>
            <Link to={`/haunts/${haunt.id}`} style={{ textDecoration: 'none' }}>
                <img src={haunt.imgUrl[0]} className='hauntTile-img' alt='haunt'/>
                <h3 className='hauntTile-name'>{haunt.name}</h3>
                <h4 className='hauntTile-address'>{haunt.city}, {haunt.state}</h4>
                <h4 className='hauntTile-price'>${haunt.price} / per night</h4>
                <h5 className='hauntTile-activity'>Activity: {paranormalRating}</h5>
                <h5 className='hauntTile-activity'>Rating: {comfortRating}</h5>
            </Link>
        </div>
    )
}
