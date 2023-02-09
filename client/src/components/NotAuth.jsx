import React from 'react';
import LoginButton from './Login';

function NotAuth() {
  return (
    <div>        
    <div>Debes estar logueado para poder continuar.</div>
    <LoginButton/>
    </div>
  )
}

export default NotAuth