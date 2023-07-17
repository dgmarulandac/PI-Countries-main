import  React from "react";
import { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux';
import { getCountries } from "../actions";
import {Link} from 'react-router-dom';
import Card from "./Card";
import Paginado from "./Paginado";
import style from "./Card.module.css";


export default function Home(){
    const dispatch =useDispatch();
    const allCountries = useSelector((state) =>state.countries);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexLastCountrie = currentPage * countriesPerPage 
    const indexOffFirstCountrie = indexLastCountrie - countriesPerPage 
    const currentCountries = allCountries.slice(indexOffFirstCountrie, indexLastCountrie)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    useEffect (() =>{
        dispatch(getCountries());

    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }

    return(
        <div>
           <Link to= '/activities'>Crear actividad</Link> 
           <h1>AGUANTE PAISES</h1>
           <button onClick={e => {handleClick(e)}}>
            Volver a cargar los paises
           </button>

           <div>
            
            <select>
                <option value='asc'>Ascendente</option>
                <option value='des'>Descendente</option>
            </select>

            <select>
                <option value='name'>Nombre</option>
                <option value='population'>Cantidad Poblacion</option>
            </select>
            


            <select>
                <option value="continents">Continente</option>
                <option value="Activity">Actividad Turistica</option>
            </select>

            <Paginado

             countriesPerPage={countriesPerPage}
             allCountries={allCountries.lenght}
             paginado={paginado}
            />
            
            <hr></hr>

            <div className={style.container}>
            {
                
                    currentCountries?.map(el =>{

                    return(
                    
                    <fragment>  
                    <Link to={"/home/"}>
                    <Card
                    imgbandera = {el.imgbandera} 
                    name = {el.name} 
                    id = {el.id} 
                    Continente = {el.continente} 
                    capital = {el.capital} 
                    Subregion = {el.subregion}              
                    area = {el.area}
                    Poblacion = {el.poblacion}
                    />
                    </Link>
                    </fragment>
                  
                    )  

                })
            }
        </div>  
            
           </div>
        </div>
    )
}
