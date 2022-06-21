import React, { useEffect, useState } from "react";

export default function UserCredential() {
 let [isTrue, setIsTrue] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  useEffect(()=>{},[isTrue])

  const handleSubmit =()=>{
    
    if(userName=='admin' && password == 'admin'){
        setIsTrue(true)
    }else{
        setIsTrue(false)
    }

  }
  console.log(isTrue)
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
       <button onClick={handleSubmit}>Submit</button>
      {isTrue ? (
        <h1>Welcome {userName} </h1>
      ) : (
        <h1>Your Credentials are wrong please enter again</h1>
      )}
    </div>
  );
}
