import React from "react";
import { Link } from "react-router-dom";
import style from './navBar.module.css';
import { getCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SerchBar";


export default function NavBar(){

    const dispatch =useDispatch();


    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    };

    return(
        <div>
             {/* <div className={style.container}>
                <div className={style.topnav}>
                
                <a href="/#" className={style.logo}><Link to='/home'>App Contries</Link></a>
                <a href="/#"><Link href="/#" to='/home'>Home</Link></a>
                <a href="/#"><Link href="/#" to='/activities'>Crear Actividad</Link></a>
                <a href="/#"><Link  to='/activity' href="#" >Actividades</Link></a>
                
                <h1>By Daniel Marulanda Cruz</h1>
                </div>
                
            </div> */}

            <nav class="navbar navbar-expand-lg bg-warning align-items-center">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold" href="#"><Link to='/home' class="text-dark text-decoration-none fs-5">App Contries</Link></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item nav-item-hover fw-bold ">
                    <a class="nav-link " aria-current="page" href="/#"><Link href="/#" class="text-light text-decoration-none fs-5" to='/home'>Home</Link></a>
                    </li>
                    <li class="nav-item fw-bold">
                    <a class="nav-link" href="/#"><Link href="/#" class="text-light text-decoration-none fs-5" to='/activities'>Crear Actividad</Link></a>
                    </li>
                    <li class="nav-item fw-bold">
                    <a class="text-danger nav-link  " href="#"><Link  class="text-light text-decoration-none fs-5" to='/activity' href="#" >Actividades</Link></a>
                    </li>
                    <li class="mt-2">
                    <button  className={style.buttonNav}
                     onClick={e => {handleClick(e)}}> Volver a cargar los paises
                    </button>
                    </li >
                    <li class="mt-2"><SearchBar/></li>
                    
                </ul>
                </div>
            </div>
            </nav>

      
        </div>

    );
}