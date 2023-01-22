import React from 'react'
import './Card.css'
import { Link } from "react-router-dom";

export default function Card({name, continente, flag, id}) {
  return (
    <div className="card" id="card">
      <div className="thumb"><img src={flag} alt="Bandera"/><div><h5>{continente}</h5></div></div>
      <div className="text-card" id="text-card">
        <div id="name"><h3>{name}</h3></div>
        <div className="show-act"><h5>Actividades: 5</h5></div>
        <div className="ver-mas">
        <Link
            to={"/countries/" + id}>
              <button>ver mas</button>           
        </Link>
        </div>
      </div>
    </div>
  );
}
