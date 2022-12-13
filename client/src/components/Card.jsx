import React from 'react'
import './Card.css'

export default function Card({name, continente, flag}) {
  return (
    <div className="card">
        <h3>{name}</h3>
        <h5>{continente}</h5>
        <img src={flag} alt="Bandera"/>
    </div>
  );
}
