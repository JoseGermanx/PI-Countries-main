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
    <div className="container">
      <div className="container-nav">
      <NavBar /> 
      </div>    
     <div className="container-card-detail">
      {pais.id === props.match.params.id ? 
      <div className="container-top">
        <div className="bloque-iz">
          <div className="pais-name"><h1>{pais.name}</h1></div>
          <div className="card-img"><img src={pais.flag} alt={pais.name}/></div>
          <h3>Capital: {pais.capital}</h3>  
          <h5>Código de país: {pais.id}</h5>
          </div>
          <div className="bloque-der">
          <div><span><h2>Datos relevantes sobre {pais.name}</h2></span></div>
          <div className="span-text">            
          <span>Continente:&nbsp;<p>{pais.continente}</p></span>  
          <span>Región:&nbsp;<p>{pais.subregion}</p></span> 
          <span>Población:&nbsp;<p>{pais.poblacion} habitantes</p></span> 
          <span>Área:&nbsp;<p>{pais.area} km2</p></span>
          </div>
          </div>             
          </div>: <div class="loader-wrapper">
          <div class="loader"></div>
        </div>}
          <div className="container-bottom">
          <div className="bloque-inf">
          <h3>Actividades turísticas</h3>
          <div className="actividades-list">          
           {pais.id === props.match.params.id && pais.activities.length !== 0 ? pais.activities.map((e) => {
          return (
            <div className="actividades">
            <p>Actividades turísticas registradas por nuestros usuarios:</p>
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
          <div className="container-footer">
      <Link to={"/home"}>
        <button className="btn">Volver</button>
      </Link>
      </div>
    </div>
  );
}
