import React from "react";
import style from "./Card.module.css";

export default function countriesCard ({id, name, imgbandera, Continente, capital, Subregion, area, poblacion }){
    return (

        <div className={style.card}>
            <img className={style.img} src={imgbandera} alt='some value'  width="150px" height="150px"/>
            <div className={style.contenido}>
            <h1 className={style.h1}>{name} </h1>
            <h5 className={style.h5}>Continente: {Continente} </h5>
            <h5 className={style.h5}>Capital: {capital}</h5>    
            <h5 className={style.h5}>Poblacion: {poblacion}</h5>
            
            </div>
        </div>
    );
}