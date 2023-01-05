import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getCountries, getFlags } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
//import {CreateActivity} from '../components/styles/Activity';
import "./Activity.css"



export default function ActivityCreator() {
  const history = useHistory();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const flags = useSelector((state) => state.flag);
    

  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    pais: [],
  });

  const [flag, setFlag] = useState({
    flag: []
  })

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getFlags());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }
  
  function handleSelect(e) {
    setInput({
      ...input,
     pais: [...input.pais, e.target.value],
      
    });
    console.log(input);
    const flagSelec = input.pais.find(element => element === flags.id);
    if(flagSelec) {
      flag.push(flags.flag);
      setFlag({
        ...flag,
        flag: [...flag, flagSelec],
      });
    }    
    
    console.log(flag);
  }

  function handleSumit(e) {
    e.preventDefault();
    console.log(input);
    
   //validaciones de campos onSumit
    var name = document.getElementById('name').value;
    var dificultad = document.getElementById('dificult').value;
    var duracion = document.getElementById('time').value;
    var temporada = document.getElementById('season').value;
    var pais = document.getElementById('country').value;
    
    if(name.length === 0 || name.length > 30) {
      alert('Revisa, te falta el campo nombre o es muy largo');
      return;
    }

    if(dificultad < 1 || dificultad > 5) {
      alert('Revisa, el campo dificultad puede ser de 1 a 5');
      return;
    }

    if(duracion < 1 || duracion > 24) {
      alert('Revisa, la duración de la actividad tiene que ser de 1 a 24 horas');
      return;
    }

    if( temporada.length === 0 ) {
      alert('Selecciona una temporada de la lista');
      return;
    }

    if( pais.length === 0 ) {
      alert('Selcción al menos 1 país');
      return;
    }

    dispatch(postActivity(input));
    setInput({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      pais: [],
    });
    setFlag({
      flag: []
    });
    history.push("/home");
  } 

  return (
    <div>
      <NavBar /> 
      
      <h1>Crea una actividad turística</h1>
      <form onSubmit={(e) => handleSumit(e)}>
        <div>
          <label>Actividad:</label>
          <input
          id="name"
            placeholder="Ejem: pasear a caballo"
            type="text"
            value={input.nombre}
            name="nombre"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Dificultad:</label>
          <input
          id="dificult"
            placeholder="del 1 al 5"
            type="range"
            min="1"
            max="5"
            step="1"
            value={input.dificultad}
            name="dificultad"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Duración:</label>
          <input
          id="time"
            placeholder="en horas"
            type="number"
            value={input.duracion}
            name="duracion"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Temporada:</label>
          <select id="season" name="temporada" onChange={(e) => handleChange(e)}>
          <option value="">Elige una temporada</option>
            <option value="Verano">Verano</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
            <option value="Otoño">Otoño</option>
          </select>

          {/* <input
            type="text"
            value={input.temporada}
            name="temporada"
            onChange={(e) => handleChange(e)}
          /> */}
        </div>
        <div>
          <label>País:</label>
          {/* <Select
          isMulti
          name="pais"
          id="country"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          //onChange={(e) => handleSelect(e)}      
          /> */}
          
          <select id="country" multiple name="pais" onChange={(e) => handleSelect(e)}>
          <option value="">Elige un país</option>
            {countries.map((country) => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <label id="flag">
          <ul><li>{input.pais.map(el => el + ", ")}</li></ul>
          </label>
        </div>
        <button type="submit">Crear actividad</button>
      </form>
      <Link to={"/home"}>
        <button className="btn">Volver</button>
      </Link>
      
    </div>
  );
}
