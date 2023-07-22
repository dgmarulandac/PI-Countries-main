import  React from "react";
import { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux';
import { getCountries, getActivities, orderByName, orderByPopulation, filterCountriesByContinent, filterCountriesByActivity} from "../actions";
import {Link} from 'react-router-dom';
import Card from "./Card";
import Paginado from "./Paginado";
import style from "./Card.module.css";
import styles from "./Home.module.css";
import SearchBar from "./SerchBar";


export default function Home(){
    const dispatch =useDispatch();
    const allactivities = useSelector((state) =>state.activities);
    const allCountries = useSelector((state) =>state.countries);
    const [,setOrder] = useState('');
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
        dispatch(getActivities())
        
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
            <br/>
           <h1>AGUANTE PAISES</h1>
           <div className={styles.nav}>
           <Link to= '/activities'><button>Crear actividad</button></Link> 
           <button onClick={e => {handleClick(e)}}> Volver a cargar los paises</button>
           <SearchBar/>
           </div>
           

           <div>
           <br></br>
           <br></br>
            <div className={styles.box}>
                <select onChange={(e) => handleSortName(e)}>
                    <option label="Ordenar Paises por Nombre"></option>
                    <option value='asc'>Ascendente</option>
                    <option value='des'>Descendente</option>
                </select>
                

                <select onChange={(e) => handleSortPopulation(e)}>
                    <option >Ordenar por Población</option>
                    <option value='Mayor'>Mayor Población</option>
                    <option value='Menor'>Menor Población</option>
                </select>

                <select onChange={(e) => handleFilterActivity(e)}> 
                <option> Actividades</option>
                {allactivities.map((v) => (
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
            </div>

           
           
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
                    
                    <div>  
                    <Link to={"/home/" + el.id}>
                    <Card
                    imgbandera = {el.imgbandera} 
                    name = {el.name} 
                    Continente = {el.continente} 
                    capital={el.capital}
                    poblacion={el.poblacion}
                    />
                    </Link>
                    </div>
                  
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
