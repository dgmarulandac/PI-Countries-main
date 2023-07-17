const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require('./Countries');
const activityRouter = require('./Activitys');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', countryRouter);
router.use('/', activityRouter);


module.exports = router;


