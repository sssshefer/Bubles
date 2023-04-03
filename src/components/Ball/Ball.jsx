import React, {useEffect, useRef, useState} from 'react';
import cl from './Ball.module.css'
import { getRandomColorHex} from "../../utils/utils";
import {useDispatch} from "react-redux";
import {addOnePoint} from "../../store/scoreReducer";

const Ball = () => {
    const dispatch = useDispatch();
    const clientWidth = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    const clientHeight = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;
    const headerHeight = 170;
    const margin = 100;
    const ballElem = useRef();

    const handleClickOnBall = () => {
        setNewBall();
        dispatch(addOnePoint());
    }
    const setNewBall = () => {
        const randomX = margin + Math.floor((Math.random() * (clientWidth - margin * 2)))
        const randomY = margin + headerHeight + Math.floor(Math.random() * (clientHeight - margin * 2 - headerHeight))
        ballElem.current.style.top = randomY + 'px';
        ballElem.current.style.left = randomX + 'px';
        ballElem.current.style.backgroundColor = getRandomColorHex();
    }
    useEffect(() => {
        setNewBall();
    }, [])

    return (
        <div onClick={handleClickOnBall} ref={ballElem} className={cl.ball}>

        </div>
    );
};

export default Ball;