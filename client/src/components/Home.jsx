import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterCountryByConti,
  orderByName,
  filterByPopulation,
  getByName,
  getActivity,
  byActivity
} from "../actions";
import Card from "./Card";
import Paginado from "./Paginado";
import NavBar from "./NavBar";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.allActivities)

  //ESTADOS LOCALES
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage, setCountryPerPage] = useState(10);
  const [orden, setOrden] = useState("");
  const [name, setName] = useState("");
  

  //CALCULO DE INDEXES
  const max = Math.round(allCountries.length / countryPerPage);
  const indexLastCountry = currentPage * countryPerPage; // 9
  const indexFirstCountry = indexLastCountry - countryPerPage; // 0
  const currentCountrys = allCountries.slice(
    indexFirstCountry,
    indexLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  function decrement() {
    setCurrentPage(currentPage - 1);
  }
  function increment() {
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivity());
      
    }, [dispatch]);

   function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
    setOrden(e.target.value);
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterCountryByConti(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleSortPopulations(e) {
    e.preventDefault();
    dispatch(filterByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value)
  }
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    setCurrentPage(1);
    setOrden(e.target.value);
    console.log(name)
  }
 
  function handleSumit(e) {
    e.preventDefault();
    dispatch(getByName(name))
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleActivity(e) {
    console.log(e.target.value)
    dispatch(byActivity(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
}
   
  useEffect(() => {
    dispatch(getByName(name));
  }, [dispatch, name]);


  return (
    <div className="container-home">
      <div className="container-header">
        <NavBar />
      </div>
      <div className="container-lateral">
        <h1>Paises y turismo</h1>
        <div className="search">
        <input
        className="search-input" 
        type="text"
        placeholder="Busca un país..."
        onChange={(e) => handleInputChange(e)}
      />
      <button      
      className="btn-search"
      type="submit"
      onClick={(e) => handleSumit(e)}
      >Buscar</button>
        </div>
        <div className="filters-title"><h3>Filtros</h3></div>
        <div className="filters">
          <div className="filters-population">
            <h3>Por tamaño de población</h3>
          <select onChange={(e) => { handleSortPopulations(e);}}>
            <option value="All">Todos</option>
            <option value="may">Mayor Población</option>
            <option value="men">Menor población</option>
          </select>
          </div>
          <div className="filters-continents">
          <h3>Por continente</h3>
          <select
            onChange={(e) => {handleFilterContinent(e);}}
          >
            <option value="All">Todos</option>
            <option value="North America">Norte América</option>
            <option value="Europe">Europa</option>
            <option value="South America">Sur América</option>
            <option value="Oceania">Oceanía</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antartida</option>
            <option value="Asia">Asia</option>
          </select>
          </div>
          <div className="filters-alpha">
          <h3>Ordenar alfabeticamente</h3>
          <select
            onChange={(e) => {
              handleSort(e);
            }}
          >
            <option value="asc"> Ordenar A - Z</option>
            <option value="des"> Ordenar Z - A</option>
          </select>
          </div>
          <div className="filters-activity">
          <h3>Filtrar por actividad</h3>
          <select onChange={handleActivity}>
                        <option value='All'>All activities</option>
                        {allActivities?.map((e) => {
                          return (
                            <option key={e.id} value={e.nombre}>
                              {e.nombre}
                            </option>
                        )})}
                    </select>
              

          </div>
          <div className="filters-erase">
          <button
            className="btn"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {" "}
            Borrar filtros
          </button>
          </div>
        </div>
        {/* <ActivityCreator /> */}
      </div>
      <div className="container-principal">
        <div className="mostrar-ciudades">
          {currentCountrys?.map((e) => {
             return (
              <div key={e.id}>
                <Card
                  name={e.name}
                  continente={e.continente}
                  flag={e.flag}
                  id={e.id}
                />
              </div>
             );
          
          })}
        </div>
        <div className="paginador-contenedor">
          <Paginado
            countryPerPage={countryPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
            //currentPage={currentPage} setCurrentPage={setCurrentPage} max={max}
          />
        </div>
      </div>
      <div className="container-footer">
        <h1>TEST</h1>
      </div>
    </div>
  );
}
