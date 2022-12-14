import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getDetail } from "../actions/index";
import "./Detail.css"

export default function Detail(props) {
  const dispatch = useDispatch();
  const pais = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <div className="card">
      <div className="contenedor">
          <h1>{pais.name}</h1>
          <img src={pais.flag} alt={pais.name} />
          <h5>Código de país: {pais.id}</h5>
          <p> {pais.name} se encuentra en el continente {pais.continente} en la región {pais.subregion} y su capital es {pais.capital}.<br/>
          Tiene una población de {pais.poblacion} habitantes y su territorio se extiende por un área de {pais.area} kilómetros.</p>

          <p>Sus principales activities turísticas son:</p>
          {/* {pais.map((e) => {
          return (
            <li key={e.id}>
              <li>{e.activities}</li>
            </li>
          );
        })} */}
        </div>
      <Link to={"/home"}>
        <button className="btn">Volver</button>
      </Link>
    </div>
  );
}
