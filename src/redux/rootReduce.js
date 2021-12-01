import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import { inputReducer } from "./inputReduce";
import { commentReducer } from "./commentReduce";
import { appReducer } from "./appReducer";

export const rootReduce = combineReducers({
    likeReducer,
    inputReducer,
    commentReducer,
    appReducer
});