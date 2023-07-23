import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SerchBar";
import style from './navBar.module.css';



export default function navBar(){

    return(
        <div className={style.bgimg}>
             <div className={style.container}>
                <div className={style.topnav}>
                <Link to='/home'>Home</Link>
                <Link  to='/activities'>Crear Actividad</Link>
                
                </div>
            </div>
        </div>

    );
}