import  React from "react";
import { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux';
import { getCountries, filterCountriesByContinent, filterCountriesByActivity} from "../actions";
import {Link} from 'react-router-dom';
import Card from "./Card";
import Paginado from "./Paginado";
import style from "./Card.module.css";
import styles from "./Home.module.css";


export default function Home(){
    const dispatch =useDispatch();
    const activities = useSelector((state) =>state.activities);
    const allCountries = useSelector((state) =>state.countries);
    
    
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const indexLastCountrie = currentPage * countriesPerPage; 
    const indexOffFirstCountrie = indexLastCountrie - countriesPerPage; 
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

    function handleFilterContinent(e) {
        dispatch(filterCountriesByContinent(e.target.value));
        setCurrentPage(1);
      }

    function handleFilterActivity(e){
        dispatch(filterCountriesByActivity(e.target.value));
        setCurrentPage(1);
    }

    return(
        <div className={styles.Home}>
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

            <select className='filterAndOrder' onChange={(e) => handleFilterActivity(e)}>
                <option value="todos"> Actividades </option>
                {activities.map((v) => (
                    <option value={v.name}>{v.name}</option>
                ))}
            </select>
            

        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="continent">Continentes</option>
          <option value="All">Todos</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antartida</option>
          <option value="North America">America del Norte</option>
          <option value="South America">America del Sur</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>

           
            <Paginado
            
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
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
                    Continente = {el.continente} 
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
