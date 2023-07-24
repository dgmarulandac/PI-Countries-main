import React from "react";
import { Link } from "react-router-dom";
import style from './navBar.module.css';



export default function navBar(){

    return(
        <div>
             <div className={style.container}>
                <div className={style.topnav}>
                <a className={style.logo}><Link to='/home'><img  src="img/navimg.jpg" />App Contries</Link></a>
                <a><Link to='/home'>Home</Link></a>
                <a><Link to='/activities'>Crear Actividad</Link></a>
                <a><Link to='/activity'>Actividades</Link></a>
                
                <h1>By Daniel Marulanda Cruz</h1>
                </div>
                
            </div>
        </div>

    );
}