import { Link } from 'react-router-dom';
import './HauntTile.css';

export default function HauntTile ({ haunt }) {

    let paranormalRating = '';
    for (let i = 0; i < haunt.activity; i++) {
        paranormalRating += '👻'
    }

    return (
        <div className='hauntTile-main-div' key={haunt.id}>
            <Link to={`/haunts/${haunt.id}`} style={{ textDecoration: 'none' }}>
                <img src={haunt.imgUrl} className='hauntTile-img' alt='haunt'/>
                <h3 className='hauntTile-name'>{haunt.name}</h3>
                <h4 className='hauntTile-address'>{haunt.city}, {haunt.state}</h4>
                <h4 className='hauntTile-price'>${haunt.price} / per night</h4>
                <h5 className='hauntTile-activity'>Activity: {paranormalRating}</h5>
            </Link>
        </div>
    )
}
