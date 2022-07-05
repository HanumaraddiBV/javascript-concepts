
import * actionTypes from './ActionTypes'
//initial state
const init={
    count:0
}

export const reducer = (state=init,action)=>{
    switch(action.type){
        case actionTypes.INC_COUNT:
            return{...state,count:state.count + action.value}
        case actionTypes.DEC_COUNT:
            return{...state,count: state.count - action.value}
        default:
            return state
    }
}