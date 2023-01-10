const { Router } = require("express");
const axios = require("axios");
const { Country, Activity } = require("../db");
const obtenerCountries = require("./obtenerCountries")
const obtenerCountry = require("./obtenerCountry")
const obtenerActivities = require("./obtenerActivities")
const activity = require("./activity")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();
router.get('/countries', obtenerCountries);
router.get('/countries/:id', obtenerCountry);
router.get('/activities/', obtenerActivities);
router.post('/activities', activity)

module.exports = router;