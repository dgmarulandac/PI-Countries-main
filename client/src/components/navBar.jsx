import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SerchBar";
import style from './navBar.module.css';



export default function navBar(){

    return(
        <div className={style.bgimg}>
             <div className={style.container}>
                <div className={style.topnav}>
                <a><Link to='/home'><img src='/img/navimg1.jpg'/> App Contries</Link></a>
                <a><Link to='/home'>Home</Link></a>
                <a><Link  to='/activities'>Crear Actividad</Link></a>
                <h1>By Daniel Marulanda Cruz</h1>
                </div>
                
            </div>
        </div>

    );
}