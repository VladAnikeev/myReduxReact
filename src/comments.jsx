import SingleCommit from "./singleCommit";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid"
import { commentCreate, commentLoad } from "./redux/action";
import { useState, useEffect } from "react";


function Comments(props) {
    const [textComments, setTextComments] = useState('');
    const dispatch = useDispatch();

    const comments = useSelector(state => {
        const { commentReducer } = state;
        return commentReducer.comments;
    });

    const handleInput = (event) => {
        setTextComments(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComments, id));
    };

    useEffect(() => {
        dispatch(commentLoad());
    }, []);

    return (
        <div className="card-cooments">
            <form
                action=""
                className="commints-item-create"
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={textComments}
                    onChange={handleInput}
                />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleCommit key={res.id} data={res} />
            })}
        </div>
    )
}
export default Comments;
