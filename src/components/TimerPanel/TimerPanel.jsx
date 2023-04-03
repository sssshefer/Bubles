import React from 'react';
import Timer from "../Timer/Timer";
import DurationButtons from "../DurationButtons/DurationButtons";
import cl from './TimerPanel.module.css'
const TimerPanel = () => {
    return (
        <div className={cl.timerPanel}>
            <Timer/>
            <DurationButtons/>
        </div>
    );
};

export default TimerPanel;