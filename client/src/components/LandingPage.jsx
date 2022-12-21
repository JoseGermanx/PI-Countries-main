import React from 'react';
import {Link} from 'react-router-dom';

import {Logo} from '../components/styles/Logo'
import './LandingPage.css'

export default function LandingPage() {
  return (
     <div className="LandingPage">
      <img src="/logo_mundo.jpg" alt="Countries App" />
        <Logo>
          Countries<span>App</span>
        </Logo>
        <Link to='/home'>
            <button className="btn">Ingresar</button>
        </Link>
     </div>
  )
}
