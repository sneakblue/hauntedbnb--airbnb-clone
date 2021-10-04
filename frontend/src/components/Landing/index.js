import { useHistory } from 'react-router-dom';
import './Landing.css';

export default function Landing () {
    const history = useHistory();
    const handleClick = () => {
        history.push('/haunts');
    }

    return (
        <>
            <div className='landing-main-div'>
                <h1 className='landing-title'>Are you ready for a scary good time?</h1>
                <button
                    type='button'
                    className='landing-haunts-btn'
                    onClick={handleClick}
                >Enter, if you dare</button>
            </div>
            <div className='footer-links'>
            <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/david-deherrera-441678208'><img className='links--logo' alt='linkedIn' src='http://pngimg.com/uploads/linkedIn/linkedIn_PNG4.png'/></a>
                <a rel="noreferrer" target='_blank' href='https://github.com/sneakblue'><img className='links--logo' alt='github' src='http://pngimg.com/uploads/github/github_PNG40.png'/></a>
            </div>
        </>
    )
}
