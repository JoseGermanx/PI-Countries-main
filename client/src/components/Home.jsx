import { React, useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleClick(e) {
    e.prevendefault();
    dispatch(getCountries());
  }

  return (
    <div>
      <Link to={"/"}>Salir</Link>
      <h1>Aplicaciones de países</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        Volver a cargar ciudades
      </button>
      <div>
        <select>
          <option value="asc"> Ascendente</option>
          <option value="des"> Descendente</option>
        </select>
        <select>
          <option value="all">Todos los continentes</option>
          <option value="con">Norte América</option>
          <option value="act">Europa</option>
        </select>
        <select>            
          <option value="asc"> Ascendente</option>
          <option value="des"> Descendente</option>
        </select>
        {allCountries?.map((e) => {
          return (
            <Link to={"/pais/" + e.id} key={e.id}>
                <Card name={e.name} continente={e.continente} flag={e.flag}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
