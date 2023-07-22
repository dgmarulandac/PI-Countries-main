import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postActivities, getActivities, getCountries} from '../actions/index.js';
import {useDispatch, useSelector} from 'react-redux';





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
        <div>
            <Link to='home'><button>Home</button></Link>
            <h1>Crea tu Actividad</h1>

            <form onSubmit={(e) =>handleSubmit(e)}>
                <div>
                    <label>Nombre: </label>
                    <input type='text' value={input.name} name='name'  pattern="[a-zA-Z ]{2,254}"placeholder='Ingresar solo letras' onChange={handleChange} required/>
                    
                </div>
                <div>
                    <label>Seleccion Dificultad: </label>
                    <label><input type="checkbox" value='1' name='1' onChange={handleCheckBox}/>1</label>
                    <label><input type="checkbox" value='2' name='2' onChange={handleCheckBox}/>2</label>
                    <label><input type="checkbox" value='3' name='3' onChange={handleCheckBox}/>3</label>
                    <label><input type="checkbox" value='4' name='4' onChange={handleCheckBox}/>4</label>
                    <label><input type="checkbox" value='5' name='5' onChange={handleCheckBox}/>5</label>
                    
                </div>
                <div>
                    <label>Duracion: </label>
                    <input type="int" value={input.Duration} name='Duration' pattern="[0-9]{1,15}"placeholder='Ingresa Solo Numeros' onChange={handleChange} required />
                    <label> Horas</label>
                </div>
                
                <div>
                    <label>Seleccion Temporada</label>
                    <select name="Seasons" value={input.Seasons} onChange={handleChange} required>
                        <option> Temporada </option>
                        <option value='Invierno'>Invierno</option>
                        <option value='Verano'>Verano</option>
                        <option value='Otoño'>Otoño</option>
                        <option value='Primavera'>Primavera</option>
                    </select>
                </div>

               <div>
                    <select onChange={handleSelect}>
                        <option> Paises</option>
                        {allCountries.map((v) => (
                        <option value={v.id}>{v.name}</option>
                        ))}
                    </select>
                </div>

                

                <button type='submit'>Crear persoje</button> 
                {
                    input.countryId.map((countries) => (
                        <div className='cancelCountry'>
                            <p>{countries}</p>
                            <button className='buttonX' onClick={() => handleDelete(countries)}>x</button>
                        </div>))
                }                                           

            </form>
        </div>


    )

}

//<ul><li>{input.countryId.map(el => el + ", ")} </li></ul>