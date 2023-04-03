import {combineReducers, createStore} from "redux";
import {timerDuration, timerIsActive, timerIsCompleted} from "./timerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {score} from "./scoreReducer";

const rootReducer = combineReducers({
    timerIsActive: timerIsActive,
    timerIsCompleted: timerIsCompleted,
    timerDuration:timerDuration,
    score:score,

})
export const store = createStore(rootReducer, composeWithDevTools());