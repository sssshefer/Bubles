import React from 'react';
import cl from './Navbar.module.css'
import TimerPanel from "../../components/TimerPanel/TimerPanel";
import Score from "../../components/Score/Score";
import {useSelector} from "react-redux";

const Navbar = ({logoText}) => {
    const timerIsCompleted = useSelector(state => state.timerIsCompleted.timerIsCompleted);
    return (
        <header className={cl.header}>
            <div>
                <h1 className={cl.logo}>{logoText}</h1>
            </div>

            {!timerIsCompleted &&
            <div className={cl.wrap}>
                <TimerPanel/>
               <div className={cl.scoreWrap}> <div className={cl.scoreText}>Score:</div><Score/></div></div>

            }

        </header>
    );
};

export default Navbar;