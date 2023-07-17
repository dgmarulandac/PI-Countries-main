import React from "react";
import './Paginado.css'

export default function Paginado ({countriesPerPage, allCountries, paginado}){
    const pageNumbers = []

    for (let i=0; i<=Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav className='paginadoContainer'>
            <ul className ='ul'>
                {pageNumbers && pageNumbers.map(number =>(
                    <li  key={number}>
                    <a className='numeroPaginado' href onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        
    )
}

