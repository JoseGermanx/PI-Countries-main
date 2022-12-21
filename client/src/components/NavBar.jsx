import React, {useState} from 'react';
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import {MenuLink} from '../components/styles/MenuLink'
import {Nav }from '../components/styles/Nav'
import {Logo} from '../components/styles/Logo'
import  {Menu}  from '../components/styles/Menu'
import {Hamburger} from '../components/styles/Hamburguer'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
      return (
      <Nav>
        <Logo href="">
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
          <MenuLink href="">Acerca de esta app</MenuLink>
          <MenuLink href="">Contacto</MenuLink>
          <MenuLink ><Link to={"/"}>Salir</Link></MenuLink>
        </Menu>
         <SearchBar />       
        {/* <Link className="btn"to={"/activity"}>Cargar una actividad</Link> */}
        
      </Nav>
    );
}
