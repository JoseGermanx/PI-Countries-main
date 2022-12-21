import React from 'react'
import './Card.css'

export default function Card({name, continente, flag}) {
  return (
    <div className="card">
      <div class="thumb"><img src={flag} alt="Bandera"/></div>
        <h3>{name}</h3>
        <h5>{continente}</h5>        
    </div>
  );
}
