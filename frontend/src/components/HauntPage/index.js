import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHaunts, removeHaunt } from "../../store/haunts";
import { getReviews } from "../../store/reviews";
import EditHaunt from "../EditHaunt";
import Reviews from "../Reviews";

export default function HauntPage () {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [isUser, setIsUser] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const haunt = useSelector(state => state.haunts[id]);
    const currUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getHaunts());
        dispatch(getReviews(id));
    }, [dispatch, id]);

    if (!haunt) {
        return null;
    }

    if (currUser && haunt.userId === currUser.id) {
        if (!isUser) {
            setIsUser(true);
        }
    }

    const deleteHaunt = () => {
        dispatch(removeHaunt(id));
        history.push('/');
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

    return (
        <div>
            <h1>{haunt.name}</h1>
            <img src={haunt.imgUrl} alt='haunt'/>
            <p>{haunt.address}, {haunt.city}, {haunt.state}, {haunt.country}</p>
            <p>${haunt.price} / Night</p>
            {isUser && (
                <>
                    <button onClick={() => showForm === true ? setShowForm(false) : setShowForm(true)}>Edit</button>
                    <button onClick={deleteHaunt}>Delete Haunt</button>
                </>
            )}
            {content}
            <Reviews haunt={haunt}/>
        </div>
    )
}
