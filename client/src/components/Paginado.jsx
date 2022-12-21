import React from 'react'

export default function Paginado({countryPerPage, allCountries, paginado}) {
    const pageNumbers = [];
    
    for (let i= 0; i < Math.ceil(allCountries/countryPerPage); i++) {
        pageNumbers.push(i+1)
    }
  return (
   <nav className="paginado">
    <ul>
        {pageNumbers && pageNumbers.map(number => (
            <li key = {number}>
            <a onClick={() => paginado(number)}>{number}</a>
            </li>
        ))}

    </ul>
   </nav>
  )
}
