import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHaunts } from "../../store/haunts";
import EditHaunt from "../EditHaunt";

export default function HauntPage () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [isUser, setIsUser] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const haunt = useSelector(state => state.haunts[id]);
    const currUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getHaunts());
    }, [dispatch]);

    if (!haunt) {
        return null;
    }

    if (currUser && haunt.userId === currUser.id) {
        console.log('success!')
        if (!isUser) {
            setIsUser(true);
        }
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
                <button onClick={() => showForm === true ? setShowForm(false) : setShowForm(true)}>Edit</button>
            )}
            {content}
        </div>
    )
}
