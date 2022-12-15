import { React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import SearchBar from "./SearchBar";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  
    useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <div>
      <Link className="btn"to={"/"}>Salir</Link>
      <h1>Paises y turismo</h1>
      {/* <button className="btn"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        Volver a cargar ciudades
      </button> */}
      <SearchBar />
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
        <div className="mostrar-ciudades">
        {allCountries?.map((e) => {
          return (
            <Link to={"/countries/" + e.id} key={e.id}>
                <Card name={e.name} continente={e.continente} flag={e.flag}/>
            </Link>
          );
        })}
      </div>
      </div>
      <button className="btn"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        Volver a cargar ciudades
      </button>
    </div>
  );
}
