import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Registernow() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const  navigate=useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        const data={
            name:name,
            email:email,
            password:password
        }

        const existingData=JSON.parse(localStorage.getItem('data')) || []
        existingData.push(data)
        localStorage.setItem('data',JSON.stringify(existingData))

        alert("Registration successful!")

        navigate('/login')
    }

    return(
        <div>
            <h1>Registernow</h1>
            <p>Welcome to the registration page!</p>

            <div className="section">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeHolder="Enter your name" value={name}
                    onChange={(e)=>{setName(e.target.value)}}></input><br></br>
                    <input type="email" placeHolder="Enter your email" value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
                    <input type="text" placeHolder="Enter your password" value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>

                <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Registernow