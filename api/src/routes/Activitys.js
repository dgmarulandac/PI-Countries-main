const { Router } = require('express')
const { Activity, Country } = require('../db.js');
const {getActivities} = require('../Controllers/LoadDb.js');


const router = Router();

router.post('/activities', async (req, res) => {
    let { 
        name, 
        Dificulty, 
        Duration, 
        Seasons, 
        countryId,  
    } = req.body
    let createActivity = await Activity.create({
        name,
        Dificulty,
        Duration,
        Seasons,
        countryId,         
    })
    const countries = await Country.findAll({
        where: {
            id: countryId,
            
        }
    })
    const resact = await createActivity.addCountries(countries)
    return res.status(200).send(resact)

})

router.get('/activities', async (req, res) => {
    const activities = await getActivities()
    res.status(200).send(activities)
})

module.exports = router;