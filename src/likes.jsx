import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/action";

function Likes(props) {
    return (
        <div className="button-controls">
            <button
                onClick={props.onIncrementLikes}
            >
                ❤️{props.likes}
            </button>
            <button
                onClick={props.onDecrementLikes}
            >
                Dislike
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    const { likeReducer } = state;
    return {
        likes: likeReducer.likes,
    };
};

function mapDispathToProps(dispath) {
    return {
        onIncrementLikes: () => {
            dispath(incrementLikes());
        },
        onDecrementLikes: () => {
            dispath(decrementLikes());
        }
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Likes);
