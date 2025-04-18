import React from 'react'
import {useNavigate} from 'react-router-dom'

const Card = (props) => {
  const title=props.title;

  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/eventregister')
  }

  return (
    <div className="e1">
    <div class="card" style={{ width: "18rem" }}>
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onClick={handleClick} class="btn btn-primary">Go to event register page</button>
    </div>
    </div>
    </div>
  )
}

export default Card
