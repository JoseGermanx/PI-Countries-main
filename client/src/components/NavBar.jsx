import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {MenuLink} from '../components/styles/MenuLink'
import {Nav }from '../components/styles/Nav'
import {Logo} from '../components/styles/Logo'
import  {Menu}  from '../components/styles/Menu'
import {Hamburger} from '../components/styles/Hamburguer'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
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
          <MenuLink ><Link to={"/"}>Salir</Link></MenuLink>
        </Menu>                
      </Nav>
    );
}
