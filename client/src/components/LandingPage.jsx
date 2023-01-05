import React from 'react';
import {Link} from 'react-router-dom';

import {Logo} from '../components/styles/Logo'
import './LandingPage.css'

export default function LandingPage() {
  return (
     <div className="LandingPage">
      <div className="social">
		<ul>
			<li><a href="http://www.facebook.com/falconmasters" target="_blank" className="icon-facebook"></a></li>
			<li><a href="http://www.twitter.com/falconmasters" target="_blank" className="icon-twitter"></a></li>
			<li><a href="http://www.googleplus.com/falconmasters" target="_blank" className="icon-googleplus"></a></li>
			<li><a href="http://www.pinterest.com/falconmasters" target="_blank" className="icon-pinterest"></a></li>
			<li><a href="mailto:contacto@falconmasters.com" className="icon-mail"></a></li>
		</ul>
	</div>
        <Logo>
          Countries<span>App</span>
          <Link to='/home'>
            <button className="btn">Ingresar</button>
        </Link>
        </Logo>
  </div>
  )
}
