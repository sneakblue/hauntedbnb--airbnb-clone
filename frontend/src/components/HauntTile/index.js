import { Link } from 'react-router-dom';
import './HauntTile.css';

export default function HauntTile ({ haunt }) {

    return (
        <div className='hauntTile-main-div' key={haunt.id}>
            <Link to={`/haunts/${haunt.id}`} style={{ textDecoration: 'none' }}>
                <img src={haunt.imgUrl} className='hauntTile-img' alt='haunt'/>
                <h3 className='hauntTile-name'>{haunt.name}</h3>
                <h4>{haunt.city}, {haunt.state}</h4>
            </Link>
        </div>
    )
}
