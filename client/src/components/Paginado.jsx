import React from "react";
import style from './Paginado.module.css'


export default function Paginado ({countriesPerPage, allCountries, paginado}){
    const pageNumbers = []
   


    for (let i=1; i<= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i);
        
    }
    
    return(
        <nav className={style.paginadoContainer}>
            <ul className ={style.ul}>
                {pageNumbers && pageNumbers.map(number =>(
                    <li  key={number}>
                    <a className={style.numeroPaginado} href onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        
    )
}

