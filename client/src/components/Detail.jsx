import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

import { getDetail } from "../actions/index";
import "./Detail.css"

export default function Detail(props) {
  console.log(props)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const pais = useSelector((state) => state.detail);


  return (
    <div className="detail">
    <NavBar /> 
     <div className="card-detail">
      <div className="contenedor">
        <div className="bloque-iz">
          <h1>{pais.name}</h1>
          <span id="card-img"><img src={pais.flag} alt={pais.name}/></span>
          <h3>Capital: {pais.capital}</h3>  
          <h5>Código de país: {pais.id}</h5>
          </div>
          <div className="bloque-der">
          <div><span><h2>Datos relevantes sobre {pais.name}</h2></span></div>
          <div className="span-text">            
          <span><p>Continente: {pais.continente}</p></span>  
          <span><p>Región: {pais.subregion}</p></span> 
          <span><p> Población: {pais.poblacion} habitantes</p></span> 
          <span><p> Área: {pais.area}</p></span>
          </div>   
          <div className="bloque-inf">
          <p>Actividades turísticas registradas por nuestros usuarios:</p>
          <div className="actividades-list">
           {pais.activities? pais.activities.map((e) => {
          return (
            <div className="actividades">
            <li key={e.id}>
              <ul><h3>{e.nombre}</h3>
                 <p>Temporada: {e.temporada}<br/>
                  Duración: {e.duracion} horas<br/>
                  Dificultad: {e.dificultad}
                  </p>
              </ul>
              </li>  
            </div>
          );
        }): <div> <p>No se encontraron actividades.<br/>
                  Registra una actividad aquí:<br/><Link to={"/activity"}>Cargar una actividad</Link> </p>
        
        </div>}</div>
        </div>     
          </div>
          </div>        
      <Link to={"/home"}>
        <button className="btn">Volver</button>
      </Link>
    </div>
    
    </div>
  );
}
