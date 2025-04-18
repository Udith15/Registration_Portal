import React from 'react'
import { useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './css/Mainpage.css'

function Mainpage(){
    const navi=useNavigate()

    const logout=()=>{
        sessionStorage.removeItem('login')
        navi('/')
    }

    const regnow=()=>{
        navi('/events')
    }
    return(
        <div className='mainpage'>
            <Navbar/>
            <div className='con1'>
            <h1>Mainpage</h1>
            <p>Welcome to the main page!</p>
            <button onClick={logout}>Logout</button>
            </div>

            <div className='con2'>
            <h1>Hero section</h1>
            <p>Welcome to the main page!</p>
            <button id="btn1" onClick={regnow}>Register now</button>
            </div>

            <div className='con3'>

            </div>

            <Footer/>
        </div>
    )
}

export default Mainpage