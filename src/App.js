import './styles/App.css';
import Navbar from "./UI/navbar/Navbar";
import Timer from "./components/Timer/Timer";
import DurationButtons from "./components/DurationButtons/DurationButtons";
import TimerPanel from "./components/TimerPanel/TimerPanel";
import Ball from "./components/Ball/Ball";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import ShowStatistic from "./components/ShowStatistic/ShowStatistic";
import {startTimerAction} from "./store/timerReducer";

function App() {
    const dispatch = useDispatch();
    const timerIsCompleted = useSelector(state=>state.timerIsCompleted.timerIsCompleted);
    const score = useSelector(state=>state.score.score);
    useEffect(()=>{
        if(score == 1){
            dispatch(startTimerAction())
        }
    },[score])
    return (
        <div className="App">
            <Navbar logoText={'-Bubles-'}/>
            {timerIsCompleted?
                <ShowStatistic/>
                :
                <Ball/>
            }

        </div>
    );
}

export default App;
