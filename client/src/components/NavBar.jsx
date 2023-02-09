import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {MenuLink} from '../components/styles/MenuLink'
import {Nav }from '../components/styles/Nav'
import {Logo} from '../components/styles/Logo'
import  {Menu}  from '../components/styles/Menu'
import {Hamburger} from '../components/styles/Hamburguer'
import LoginButton from './Login'
import { useAuth0 } from '@auth0/auth0-react';
import UserLogueado from './UserLogueado';


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth0()
      return (
      <Nav>
        <Logo href="/home">
        <img src="/logo_mundo.jpg" alt="Countries App" />
          Countries<span>App</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink ><Link to={"/activity"}>Cargar una actividad</Link></MenuLink>
          {isAuthenticated? <MenuLink ><Link to={"/perfil"}><UserLogueado/></Link></MenuLink> : <LoginButton />}
        </Menu>                
      </Nav>
    );
}
 