import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterCountryByConti,
  orderByName,
  filterByPopulation,
  getByName,
  getActivity,
  byActivity,
  bySeason
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
  //const max = Math.round(allCountries.length / countryPerPage);
  const indexLastCountry = currentPage * countryPerPage; // 9
  const indexFirstCountry = indexLastCountry - countryPerPage; // 0
  const currentCountrys = allCountries.slice(
    indexFirstCountry,
    indexLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // function decrement() {
  //   setCurrentPage(currentPage - 1);
  // }
  // function increment() {
  //   setCurrentPage(currentPage + 1);
  // }

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
    const element = document.getElementById("filters");
    element.style.display='none';
    e.preventDefault();
    setName(e.target.value);
    setCurrentPage(1);
    setOrden(e.target.value);
    console.log(name);
    if (e.target.value === "") {
      element.style.display='flex';
    }
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

function handleSeason(e) {
  console.log(e.target.value)
  dispatch(bySeason(e.target.value));
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
        <h1>Encuentra tu próximo destino</h1>
        <div className="search">
        <input
        id="search"
        className="search-input" 
        type="text"
        placeholder="Busca un país..."
        onChange={(e) => handleInputChange(e)}
      />
      {/* <button      
      className="btn-search"
      type="submit"
      onClick={(e) => handleSumit(e)}
      >Buscar</button> */}
        </div>
        <div className="filters-title"><h3>Filtros</h3></div>
        <div className="filters" id="filters">
          <div className="filters-population">
            <h3>Población</h3>
          <select onChange={(e) => { handleSortPopulations(e);}}>
            <option value="All">Todos</option>
            <option value="may">Mayor Población</option>
            <option value="men">Menor población</option>
          </select>
          </div>
          <div className="filters-continents">
          <h3>Continentes</h3>
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
          <h3>Alfabeticamente</h3>
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
                    <div className="filters-temporada">
          <h3>Filtrar por temporada</h3>
          <select onChange={handleSeason}>
                        <option value='All'>Todas</option>
                        <option value='Verano'>Verano</option>
                        <option value='Invierno'>Invierno</option>
                        <option value='Otoño'>Otoño</option>
                        <option value='Primavera'>Primavera</option>                        
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
          {currentCountrys.length > 0 ? currentCountrys.map((e) => {
             return (
              <div key={e.id}>
                <Card
                  name={e.name}
                  continente={e.continente}
                  flag={e.flag}
                  id={e.id}
                  activities={e.activities}
                />
              </div>
             );
          
          }):<div class="loader-wrapper">
          <div class="loader"></div>
        </div>}
        </div>
        <div className="paginador-contenedor">
          {/* <button className="prev" onClick={increment}>Prev</button> */}
          <Paginado
            countryPerPage={countryPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
            />
            {/* <button className="next" onClick={decrement}>Next</button> */}
        </div>
      </div>
      <div className="container-footer">
        <p>Aplicación desarrollada por <a href="http://github.com/jgxdev">Jose G Martínez</a> con mucho poder 🚀.</p>
        <p>Proyecto individual Bootcamp 💻 de Henry</p>
      </div>
    </div>
  );
}
