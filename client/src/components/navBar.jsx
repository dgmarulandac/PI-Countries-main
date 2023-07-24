import React from "react";
import { Link } from "react-router-dom";
import style from './navBar.module.css';



export default function navBar(){

    return(
        <div>
             <div className={style.container}>
                <div className={style.topnav}>
                <a href="/#" className={style.logo}><Link to='/home'><img  src="img/navimg.jpg" alt="img"/>App Contries</Link></a>
                <a href="/#"><Link href="/#" to='/home'>Home</Link></a>
                <a href="/#"><Link href="/#" to='/activities'>Crear Actividad</Link></a>
                <a href="/#"><Link  to='/activity' href="#" >Actividades</Link></a>
                
                <h1>By Daniel Marulanda Cruz</h1>
                </div>
                
            </div>
        </div>

    );
}