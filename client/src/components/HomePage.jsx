import  React from "react";
import { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux';
import { getCountries, getActivities, orderByName, orderByPopulation, filterCountriesByContinent, filterCountriesByActivity} from "../actions";
import {Link} from 'react-router-dom';
import Card from "./Card";
import Paginado from "./Paginado";
import style from "./Card.module.css";
import styles from "./Home.module.css";


export default function Home(){
    const dispatch =useDispatch();
    //const allactivities = useSelector((state) =>state.activities);
    const allCountries = useSelector((state) =>state.countries);
    const [orden, setOrder] = useState('');
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
    };

    function handleFilterContinent(e) {
        dispatch(filterCountriesByContinent(e.target.value));
        setCurrentPage(1);
      };

    function handleFilterActivity(e){
        dispatch(filterCountriesByActivity(e.target.value));
        setCurrentPage(1);
    };

    function handleSortName (e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    };

    function handleSortPopulation (e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    };
    return(
        <div className={styles.Home}>
           <Link to= '/activities'>Crear actividad</Link> 
           <h1>AGUANTE PAISES</h1>
           <button onClick={e => {handleClick(e)}}>
            Volver a cargar los paises
           </button>

           <div>
            
            <select onChange={(e) => handleSortName(e)}>
                <option>Ordenar Paises por Nombre</option>
                <option value='asc'>Ascendente</option>
                <option value='des'>Descendente</option>
            </select>

            <select onChange={(e) => handleSortPopulation(e)}>
                <option >Ordenar por Población</option>
                <option value='Mayor'>Mayor Población</option>
                <option value='Menor'>Menor Población</option>
            </select>

            <select onChange={(e) => handleFilterActivity(e)}> 
            <option value="All"> Tipo de actividades </option>
            <option value="Montar en bici"> Montar en bici</option>
            <option value="Saltar"> Saltar </option>
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

           <br></br>
           <br></br>           
        </div>
    )
}
