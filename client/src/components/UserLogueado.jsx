import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

function UserLogueado() {
    const { user } = useAuth0()
  return (
    <div className="contenedor-userlog">
        <div><img id="profile" src={user.picture} alt={user.name} /></div>
        <div><p>{user.name}</p></div>       
    </div>
  );
}

export default UserLogueado;
