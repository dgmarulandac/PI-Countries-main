const { Router } = require('express');
const {Country, Activity} = require ('../db.js');
const { getDbInfo} = require('../Controllers/LoadDb.js');
//const Activity = require('../models/Activity.js');

const router = Router();
 
router.get('/countries', async(req, res) =>{
    const name = req.query.name
    let allCountries= await getDbInfo();
    if (name){
        let contriesName = await allCountries.filter(a => a.name.toLowerCase().includes(name.toLowerCase()));
        console.log(name)
        contriesName.length ? 
        res.status(200).send(contriesName):
        res.status(404).send('No se encuenta el pais, lo siento');

    } else{
        res.status(200).send(allCountries);
    }
})


router.get('/countries/:id', async (req, res) =>{
    const id = req.params.id;
    let allCountries = await getDbInfo();//hacemos la llamada de base de datos
    
    if (id) { 
        let countryId = await allCountries.filter(el => el.id == id.toUpperCase(),{include:Activity})
        countryId.length ?
            res.status(200).send(countryId) :
            res.status(404).send('No esta el Pais');
    }

})

   

module.exports = router;