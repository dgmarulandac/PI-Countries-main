const axios = require('axios');
const {Country, Activity} = require ('../db.js');
const { API_ALL} = process.env;

const getApiInfo = async () => {
    const apiUrl = await axios.get(`${API_ALL}`); //llamamos el endpoint, y pones async await para que trabaje de manera asincrona
    //console.log(apiUrl);
    const apiInfo = await apiUrl.data.map(e =>{
        
        return {
          name: e.name.common || 'undefined',
          id: e.cca3 ||'NaN',
          imgbandera: e.flags?.[0] || 'Undefined',       
          continente: e.continents?.[0] || 'Undefined',
          capital: e.capital?.[0] || 'Undefined',
          subregion: e.subregion || 'Undefined',
          area: e.area || '0',
          poblacion: e.population || '0',
        }           
    })

    
    //console.log(apiInfo);
    return apiInfo;     
};


const savedbInfo = async () =>{
    try{
        const infoApi = await getApiInfo();
        const result = await infoApi.map(async(e) =>{
         
            await Country.findOrCreate({
                 where: { 
                    id: e.id,
                    name: e.name, 
                    imgbandera: e.imgbandera,
                    continente: e.continente,
                    capital: e.capital,
                    subregion: e.subregion,
                    area: e.area,
                    poblacion: e.poblacion
                 }                
              });
        });
        return result;
    }catch (error){
        return{
            error: error.message,
            mensaje: "me suda el celebreo"
        }
    }
}

const getDbInfo = async () => {
    await savedbInfo();
    console.log(savedbInfo);
    const aux = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'Dificulty', 'Duration', 'Seasons'],
            through: {
                attributes: [],
            }
        }
    })
    return aux
}

const getActivities = async () => {
    const get = await Activity.findAll()
    return get;
}


module.exports = { getDbInfo, getActivities, savedbInfo };