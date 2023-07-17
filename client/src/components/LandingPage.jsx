import React from "react";
import {Link} from 'react-router-dom';
import style from './Landing.module.css'

export default function landingPage(){
    return(
        
        <div className={style.landingPage}>
            <h1 className={style.Title}>Welcome to <br></br>Countries App</h1>
            <Link to='/home'>
                <button className={style.button}>Get In</button>
            </Link>
        </div>
        
    )
}