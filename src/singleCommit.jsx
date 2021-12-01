import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "./redux/action"

function SingleCommit({ data }) {
    const dispatch = useDispatch();
    const { text, id } = data;
    const [textComment, setTextComment] = useState('');


    const handleInput = (event) => {
        setTextComment(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(commentUpdate(textComment, id));
    };

    useEffect(() => {
        if (text) {
            setTextComment(text);
        }
    }, [text]);


    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(commentDelete(id));
    };


    return (
        <div className="card-cooments">
            <form
                action=""
                className="comments-item"
                onSubmit={handleSubmit}
            >
                <div
                    className="comments-item-delete"
                    onClick={handleDelete}
                >
                    &times;
                </div>
                <input
                    type="text"
                    value={textComment}
                    onChange={handleInput}
                />
                <input type="submit" hidden />
            </form>
        </div>
    )
}

export default SingleCommit;