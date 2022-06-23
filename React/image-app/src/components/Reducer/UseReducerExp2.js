import React, { useReducer } from "react";


const init = {
    count: 0
}

const reducer = (state,action) =>{
    switch(action.type){
    case 'increment':
        return {count: state.count + action.value};
    case 'decrement':
        return {count: state.count - action.value}

    default:
        return state
    }
}


export const UseReducerExp2 = () => {
    const [count,dispatch] = useReducer(reducer,init)
    const [count2,dispatch1] = useReducer(reducer,init)
  return ( 
    <div>
        <h1>{count.count}</h1>
        <button onClick={()=> dispatch({type:'increment', value:1})}>Inc</button>
        <button onClick={()=> dispatch({type:'decrement', value:1})}>Dec</button>
        <h1>{count2.count}</h1>
        <button onClick={()=> dispatch1({type:'increment', value:5})}>Inc</button>
        <button onClick={()=> dispatch1({type:'decrement', value:5})}>Dec</button>
    </div>
  )
}
