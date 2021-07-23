import { useHistory } from 'react-router-dom';
import './Landing.css';

export default function Landing () {
    const history = useHistory();
    const handleClick = () => {
        history.push('/haunts');
    }

    return (
        <div className='landing-main-div'>
            <h1 className='landing-title'>Are you ready for a scary good time?</h1>
            <button
                type='button'
                className='landing-haunts-btn'
                onClick={handleClick}
            >Enter, if you dare</button>
        </div>
    )
}
