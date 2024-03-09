import React from 'react';
import img from '../Images/Travel.jpg';

const Home = () => {
  return (
    <div className='cont'>
      <div className="top" style={{maxWidth: '550px '}}>
        <h1>Travel Assistant</h1>
        <p>Your Next Journey, Optimized</p>
        <p>
        Build, personalize, and optimize your itineraries with our free AI trip planner. Designed for vacations, workations, and everyday adventures.
        </p>
      </div>
        <img src={img} alt='img' style={{width: '50px', mixBlendMode: 'darken', flex: 1}} />
    </div> 
  )
}

export default Home
