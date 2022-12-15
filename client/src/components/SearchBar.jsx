import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getByName} from '../actions'
import './SearchBar.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name)
  }
  function handleSumit(e) {
    e.preventDefault();
    dispatch(getByName(name))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Busca un país..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
      className="btn"
      type="submit"
      onClick={(e) => handleSumit(e)}
      >Buscar</button>
    </div>
  );

  
};