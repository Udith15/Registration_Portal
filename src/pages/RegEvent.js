import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function RegEvent(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [eventName, setEventName] = useState('');

    const navi=useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        const data={
            firstName:firstName,
            lastName:lastName,
            email:email,
            eventName:eventName
        }

        const existdata=JSON.parse(localStorage.getItem(email)) || []
        existdata.push(data)
        localStorage.setItem(email,JSON.stringify(existdata))

        alert("Event registration successful!")
        navi('/events')
    }


    return(
        <div>
            <h1>Event Registration</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/><br></br>
                    <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/><br></br>
                    <input type="email" placeholder="Enter Email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
                    <input type="text" placeholder="Enter Event Name" value={eventName} onChange={(e)=>{setEventName(e.target.value)}}/><br></br>
                    {/* <input type="number" placeholder="Enter Phone Number" /><br></br> */}
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegEvent