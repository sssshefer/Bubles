import React from 'react';
import Score from "../Score/Score";
import TryAgainButton from "../TryAgainButton/TryAgainButton";
import cl from './ShowStatistic.module.css'
const ShowStatistic = () => {
    return (
        <div className={cl.wrap}>
            <div className={cl.title}>
                <span>Your score is </span><Score/>
            </div>

            <TryAgainButton>Try again</TryAgainButton>
        </div>
    );
};

export default ShowStatistic;