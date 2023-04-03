import React from 'react';
import cl from './Score.module.css'
import {useSelector} from "react-redux";
const Score = () => {
    const score = useSelector(state=>state.score.score);
    return (
        <div className={cl.score}>
            {score}
        </div>
    );
};

export default Score;