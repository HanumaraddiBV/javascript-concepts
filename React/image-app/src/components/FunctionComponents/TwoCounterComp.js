import React, { useEffect, useState } from 'react'

export default function TwoCounterComp() {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);


    useEffect(()=>{
        document.title =`You clicked ${count} times`
    },[count])

    const handleCountOne = ()=>{
        setCount(count+1)
    }
    
    return (
    <div>
      <h1>count 1 : {count}</h1>
      <h1>count 2 : {count2}</h1>
      <button onClick={handleCountOne}>Increment first Counter</button>
      <button onClick={()=> setCount2(count2+1)}>Increment Second Counter</button>
    </div>
  )
}
