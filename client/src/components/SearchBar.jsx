import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getByName} from '../actions'
import {Search }from '../components/styles/SearchBar'

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
    
    var search = document.getElementById('search').value;
    if(search.length === 0) {
      alert('Ingresa algunos caracteres para buscar paises');
      return;
    }   
    dispatch(getByName(name))
  }
   
  useEffect(() => {
    dispatch(getByName(name));
  }, [dispatch, name]);

  return (
    <Search>
      <input
        id="search"
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
    </Search>
  );

  
};