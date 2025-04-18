import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import './css/Events.css'

function Events(){
    return(
        <div className="events">
            <div className="c1">
            <Navbar/>
            </div>
            <div className="c2">

            <h1>Events</h1>
            <p>This is the events page of our application.</p>

            </div>

            <div className="c3">
                <Card title="TOS"/>
                <Card title="Query find"/>
                <Card title="COD"/>
                <Card title="COC"/>
                <Card title="coding"/>
                <Card title="Treasure hunt"/>
                <Card title="TOS"/>
                <Card title="TOS"/>
                <Card title="TOS"/>
                <Card title="TOS"/>
                <Card title="TOS"/>
                <Card title="TOS"/>

            </div>

        </div>
    )
}

export default Events