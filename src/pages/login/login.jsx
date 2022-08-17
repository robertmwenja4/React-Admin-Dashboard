import React, { useState } from 'react'

const login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <input type="text" placeholder="username" required onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password" required onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default login