import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postActivities, getActivities, getCountries} from '../actions/index.js';
import {useDispatch, useSelector} from 'react-redux';
import style from './activityCreate.module.css'
import NavBar from './navBar.jsx'





export  default function ActivityCreate() {
    const dispatch = useDispatch()
    const history = useHistory()
    const allCountries = useSelector((state) =>state.allCountries);

    
    const [input, setInput] = useState({
        name: "",
        Dificulty: "",
        Duration: "",
        Seasons: "",
        countryId: []
    })

    useEffect(() =>{
        dispatch(getActivities());
        dispatch(getCountries())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        
    }

    function handleCheckBox(e){
        if (e.target.checked){
            setInput({
                ...input,
                Dificulty: e.target.value
            })
        }
        console.log(input)
    }

    function handleSelect(e){
        setInput({
            ...input,
            countryId: [...input.countryId,e.target.value]
        })
        console.log(input)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postActivities(input))
        alert("Actividad Creada!!")
        setInput({
            name: "",
            Dificulty: "",
            Duration: "",
            Seasons: "",
            countryId: []
        })
        history.push('/home')
    }

    function handleDelete(el){
        setInput({
            ...input,
            countryId: input.countryId.filter((occ) => occ !== el)
        })
    }  
    return(
        <div >
            <NavBar/>
            
            <div className={style.loginbox}>
            
            <h1>Crea tu Actividad</h1>

            <form onSubmit={(e) =>handleSubmit(e)}>
                <div className={style.inputbox}>
                    
                    <input type='text' value={input.name} name='name'  pattern="[a-zA-Z ]{2,254}" onChange={handleChange} required/>
                    <label>Ingresar Nombre Actividad</label>
                </div>
                
                <div className={style.divDificulty}>
                    <label className={style.label1}>Seleccione Dificultad: </label>
                    <label className={style.container}><input checked={style.checked} type="checkbox" value='1' name='1' onChange={handleCheckBox}/> <div className={style.checkmark}></div>1</label>
                    <label className={style.container}><input checked={style.checked} type="checkbox" value='2' name='2' onChange={handleCheckBox}/> <div className={style.checkmark}></div>2</label>
                    <label className={style.container}><input checked={style.checked} type="checkbox" value='3' name='3' onChange={handleCheckBox}/> <div className={style.checkmark}></div>3</label>
                    <label className={style.container}><input checked={style.checked} type="checkbox" value='4' name='4' onChange={handleCheckBox}/> <div className={style.checkmark}></div>4</label>
                    <label className={style.container}><input checked={style.checked} type="checkbox" value='5' name='5' onChange={handleCheckBox}/> <div className={style.checkmark}></div>5</label>
                    
                </div>
                <div className={style.inputbox}>
                    <input type="int" value={input.Duration} name='Duration' pattern="[0-9]{1,15}" onChange={handleChange} required />
                    <label>Ingrese Duración acividad</label>
                    
                </div>
                
                <div className={style.divTemporada}>
                    <label className={style.label1}>Seleccion Temporada</label>
                    <select className={style.select1} name="Seasons" value={input.Seasons} onChange={handleChange} required>
                        <option className={style.op1} > Temporada </option>
                        <option  className={style.op1} value='Invierno'>Invierno</option>
                        <option  className={style.op1} value='Verano'>Verano</option>
                        <option  className={style.op1} value='Otoño'>Otoño</option>
                        <option  className={style.op1} value='Primavera'>Primavera</option>
                    </select>
                </div>

               <div>
                    <select  className={style.select1}onChange={handleSelect}>
                        <option> Paises</option>
                        {allCountries.map((v) => (
                        <option className={style.op1} value={v.id}>{v.name}</option>
                        ))}
                    </select>
                </div>

                <button className={style.ButtonCrear}>Crear personaje</button> 
                
                <div className={style.containerC}>
                {
                    input.countryId.map((countries) => (
                        <div className={style.containerC1}>
                            <p>{countries}</p>
                            <button className={style.buttonDelete} onClick={() => handleDelete(countries)}>Eliminar</button>
                              
                        </div>))
                } 
                </div>                                          

            </form>

            </div>
        </div>


    )

}

//<ul><li>{input.countryId.map(el => el + ", ")} </li></ul>