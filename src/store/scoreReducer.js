const scoreDefault = {
    score: 0,
}


const ActionTypes = {
    ADD_ONE_POINT: "ADD_ONE_POINT",
    SET_SCORE_ZERO: "SET_SCORE_ZERO",

};

export const score = (state = scoreDefault, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ONE_POINT:
            return {...state, score: state.score +1}
        case ActionTypes.SET_SCORE_ZERO:
            return {...state, score: 0}

        default:
            return state;
    }
}


export const addOnePoint = () => ({type: ActionTypes.ADD_ONE_POINT})
export const setScoreZero = () => ({type: ActionTypes.SET_SCORE_ZERO})


