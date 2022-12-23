import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountryByConti} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

//ESTADOS LOCALES
const [currentPage, setCurrentPage] = useState(1);
const [countryPerPage, setCountryPerPage] = useState(10);

//CALCULO DE INDEXES
const indexLastCountry = currentPage * countryPerPage // 9
const indexFirstCountry = indexLastCountry - countryPerPage // 0

const currentCountrys =allCountries.slice(indexFirstCountry, indexLastCountry);

const paginado = (pageNumber) => {
  setCurrentPage(pageNumber);
}

  
    useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

function handleFilterContinent(e) {
  dispatch(filterCountryByConti(e.target.value));
}

  return (
    <div className="container">
      <NavBar />       
      <h1>Paises y turismo</h1>
      <SearchBar />
        <div>
        {/* <select>
          <option value="asc"> Ascendente</option>
          <option value="des"> Descendente</option>
        </select> */}
        <select onChange={ (e) => {
          handleFilterContinent(e);
        } }>
          <option value="All">Todos los continentes</option>
          <option value="North America">Norte América</option>
          <option value="Europe">Europa</option>
          <option value="South America">Sur América</option>
          <option value="Oceania">Oceanía</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antartida</option>
          <option value="Asia">Asia</option>
        </select>
        {/* <select>            
          <option value="asc"> Mayor población</option>
          <option value="des"> Menor población</option>
        </select> */}
      <Paginado
      countryPerPage = {countryPerPage}
      allCountries= {allCountries.length}
      paginado= {paginado}
      />



        <div className="mostrar-ciudades">
        {currentCountrys?.map((e) => {
          return (
            <Link
            to={"/countries/" + e.id}
            key={e.id}>
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
