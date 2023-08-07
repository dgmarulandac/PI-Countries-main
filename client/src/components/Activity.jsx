import React from "react";
import style from "./activityCard.module.css";

export default function activityCard ({id, name, Dificulty, Duration, Seasons, countryId}){
    return (
        
        <div className={style.card}>
            
            <h1 className={style.h1}>{name} </h1>
            <div className={style.contenido}>
            
            <h5 className={style.h5}>Dificultad: {Dificulty} </h5>
            <h5 className={style.h5}>Duración Actividad: {Duration} Horas</h5>    
            <h5 className={style.h5}>Temporada: {Seasons}</h5>
            
            
            </div>
        </div>
    );
}