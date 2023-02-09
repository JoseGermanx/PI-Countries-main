import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';

const UserProfile = () => {
    const {user, isLoading, isAuthenticated} = useAuth0();
    if (isLoading) {
      return <div class="loader-wrapper">
      <div class="loader"></div>
    </div>;
    }
  return (
    isAuthenticated && (
    <div>
        <img src={user.picture} alt={user.name}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton />
    </div>
    )
  )
}

export default UserProfile