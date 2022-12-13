import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar({onSearch}) {

    const [city, setConuntry] = useState("");

    function manejoCambio (e) {
      setConuntry(city => city = e.target.value);
    }

  // acá va tu código
  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="País..."
        onChange={manejoCambio}
      />
      <input className="btn" type="submit" value="Buscar" />
    </form>
  );

  
};