import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


function Loginpage(){

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        const storeddata=JSON.parse(localStorage.getItem('data'))
        const getdata=storeddata.find(user => user.email === email && user.password === password)

        if(getdata){
            alert("Login successful!")
            sessionStorage.setItem('login','true')
            navigate('/main')
        }
        else{
            alert("Invalid credentials!")
        }
    }
    return (
        <div>
            <h1>Loginpage</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br></br>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br></br>
            
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Loginpage;