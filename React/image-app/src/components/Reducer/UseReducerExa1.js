import { useReducer } from "react";
import React from "react";

const init = {
    name: "reddy"
}

 function reducer(state,action){
    switch(action.type){
        case 'add':
            return {name: state.name +" "+ action.value}
        default:
            return state
    }
 }

 
 export const UseReducerExa1 = () => {
    const[state,dispatch] = useReducer(reducer,init);
   return (
     <div>
        <h1>{state.name}</h1>
        <button onClick={()=> dispatch({type:'add',value:'is good person'})}>Change</button>
     </div>
   )
 }
 