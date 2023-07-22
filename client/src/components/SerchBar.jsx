import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameCountries} from "../actions";


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
            <input type='text' value={name} placeholder="Buscar..." onChange={(e) => handleInputChange(e)}/>

            <button type="submit" value="" onClick={(e) => handleSubmit(e)}>Buscar</button>
            
        </div>
    )
}