import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css'

export default function LandingPage() {
  return (
     <div className="LandingPage">
        <h1> Countries App</h1>
        <h3> Un viaje de aventuras por el mundo</h3>
        <Link to='/home'>
            <button className="btn">Ingresar</button>
        </Link>
     </div>
  )
}
