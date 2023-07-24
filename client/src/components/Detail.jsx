import React from 'react';
import {getDetail} from '../actions/index.js';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import style from './detail.module.css'
import NavBar from './navBar.jsx';



export default function Detail(props){
    
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    },[dispatch, props.match.params.id]);

    const myCountry = useSelector((state) => state.detail);

    return (
        <div className={style.container}>

           <NavBar/>
            {
                    myCountry.length >0 ?
                    <div className={style.countryDetail}>
                        <img className={style.img} src={myCountry[0].imgbandera} alt="" />
                        <div className={style.contenido}>
                            <h1 className={style.h1}>{myCountry[0].name} </h1>
                            <h5 className={style.h5}>Id Pais: {myCountry[0].id} </h5>
                            <h5 className={style.h5}>Continente: {myCountry[0].continente} </h5>
                            <h5 className={style.h5}>Capital: {myCountry[0].capital} </h5>
                            <h5 className={style.h5}>Subregión: {myCountry[0].subregion} </h5>
                            <h5 className={style.h5}>Area: {myCountry[0].area} Kms</h5>
                            <h5 className={style.h5}>Población: {myCountry[0].poblacion} </h5>
                        </div>

                        <div className={style.countryActivity}>  {myCountry[0].activities?.map(el=>{
                    return(
                        <div className={style.cardActivity}>
                            
                            <h2 className={style.h2}>Actividad en este Pais</h2>
                            
                            <div>
                            <h5 className={style.h5}>Nombre Actividad: {el.name}</h5>
                            <h5 className={style.h5}>Dificultad: {el.Dificulty}</h5>
                            <h5 className={style.h5}>Duracion: {el.Duration} Horas</h5>
                            <h5 className={style.h5}>Temporada: {el.Seasons}</h5>
                        </div>
                        </div>
                  )})}</div>


                    </div> : <div className={style.loader}>
                                    <span className={style.loadertext}>....loading</span>
                                    <span className={style.load}></span>
                                </div>
            }
           
        </div>
    )
}