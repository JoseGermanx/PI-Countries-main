import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getCountries, getActivity } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
//import {CreateActivity} from '../components/styles/Activity';
import "./Activity.css"



export default function ActivityCreator() {
  const history = useHistory();
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries).sort((a, b) => {
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
})
 
  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    pais: [],
  });

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivity());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }
  
  
  function handleSelect(e) {
     setInput({
      ...input,
     pais: [...input.pais, e.target.value]
    });
    console.log(input.pais)
  }

  function handleDelete(e) {
     setInput({
        ...input,
        pais: input.pais.filter(c => c !== e)
    })
    console.log(input.pais)
  }

  function handleSumit(e) {
    e.preventDefault();

   //validaciones de campos onSumit
    var name = document.getElementById('name').value;
    var dificultad = document.getElementById('dificult').value;
    var duracion = document.getElementById('time').value;
    var temporada = document.getElementById('season').value;
    var pais = document.getElementById('country').value;
    
    if(name.length === 0) {
      alert('Nombre de la actividad no puede estar vacio');
      return;
    }

    if(name.length > 20) {
      alert('Nombre de la actividad debe ser máximo de 20 caracteres');
      return;
    }

    if(dificultad < 1 || dificultad > 5) {
      alert('Revisa, el campo dificultad puede ser de 1 a 5');
      return;
    }

    if(duracion < 1 || duracion > 12) {
      alert('Revisa, la duración de la actividad puede ser de 1 a 12 horas');
      return;
    }

    if( temporada.length === 0 ) {
      alert('Selecciona una temporada de la lista');
      return;
    }

    if(!pais.length) {
      alert('Selcción al menos 1 país');
      return;
    }

    console.log(input);
    dispatch(postActivity(input));
    alert('Actividad creada');
    setInput({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      pais: [],
    });    
    history.push("/home");
  } 

  return (
    <div className="container-creator">
      <div className="nav">
      <NavBar />
      </div>
      <div className="container-actividad">      
      <h3>Crea una actividad turística</h3>
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
          <select id="dificult"
          value={input.dificultad}
            name="dificultad"
            onChange={(e) => handleChange(e)} >
          <option value="" hidden>Elige la dificultad</option>
          <option value="1">1 - Muy facil</option>
          <option value="2">2 - Facil</option>
          <option value="3">3 - Moderado</option>
          <option value="4">4 - Dificil</option>
          <option value="5">5 - Muy dificil</option>
          </select>
          
        </div>
        <div>
          <label>Duración:</label>
          <input
          id="time"
            placeholder="(1 a 12 horas)"
            type="number"
            min="1"
            max="12"
            value={input.duracion}
            name="duracion"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Temporada:</label>
          <select id="season" name="temporada" onChange={(e) => handleChange(e)}>
          <option value="" hidden>Elige una temporada</option>
            <option value="Verano">Verano</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
            <option value="Otoño">Otoño</option>
          </select>         
        </div>
        <div>
          <label>País:</label>
         <select id="country" name="pais" onChange={(e) => handleSelect(e)}>
         <option value="" hidden>Seleciona un país</option>
            {countries.map(country => (
              <option key={country.id} value={country.id} >
                {country.name}
              </option>
            ))}
          </select>
          <div id="flag" className="flag">
          <ul><li className="countriesSelected">
            {input.pais.map(el => 
            <div key={el.id}>
            {el}
            <button type="button" onClick={() => handleDelete(el)}>X</button>
            </div>)
            }</li></ul>
          </div>
        </div>
        <button type="submit">Crear actividad</button>
      </form>
      </div>
      <div class="footer">
      <Link to={"/home"}>
        <button className="btn">Volver</button>
      </Link>
      </div>
    </div>
  );
}
