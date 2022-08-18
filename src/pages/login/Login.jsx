import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {login} from '../../redux/apiCalls';
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = (e)=>{
        e.preventDefault();
        login(dispatch, {username, password});
    }
  return (
    <div className="container">
        <input className="inp" type="text" placeholder="username" required onChange={(e)=>setUsername(e.target.value)}/>
        <input className="inp" type="password" placeholder="password" required onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn"  onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login