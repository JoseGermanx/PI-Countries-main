import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import './Activity.css'


export default function ActivityCreator() {
  const history = useHistory();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    pais: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, []);

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
  }
  function handleSumit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postActivity(input));
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
    <div>
      <h1>Crea una actividad turística</h1>
      <form onSubmit={(e) => handleSumit(e)}>
        <div>
          <label>Nombre de la actividad:</label>
          <input
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
            placeholder="del 1 al 5"
            type="text"
            value={input.dificultad}
            name="dificultad"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Duración:</label>
          <input
            placeholder="en horas"
            type="text"
            value={input.duracion}
            name="duracion"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Temporada:</label>
          <select name="temporada" onChange={(e) => handleChange(e)}>
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
          <select name="pais" onChange={(e) => handleSelect(e)}>
          <option value="">Elige un país</option>
            {countries.map((country) => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <ul><li>{input.pais.map(el => el + " ,")}</li></ul>
        </div>
        <button type="submit">Crear actividad</button>
      </form>
    </div>
  );
}
