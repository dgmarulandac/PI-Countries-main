import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameCountries} from "../actions";
import style from './SearchBar.module.css'


export default function SearchBar (){
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    
    function handleInputChange (e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit (e){
        e.preventDefault()
        if (name.length === 0) return alert('Debe colocar un Pais');
        dispatch(getNameCountries(name))
        setName('')

    }

    return(

        <div>
            <input className={style.inputSerch} type='text' value={name} placeholder="Buscar..." onChange={(e) => handleInputChange(e)}/>

            <button className={style.buttonNav} type="submit" value="" onClick={(e) => handleSubmit(e)}>Buscar</button>
            
        </div>
    )
}