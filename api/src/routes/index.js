const { Router } = require("express");
const obtenerCountries = require("./getCountries")
const obtenerCountry = require("./getCountry")
const obtenerActivities = require("./getActivities")
const activity = require("./createActivity")

const router = Router();
router.get('/countries', obtenerCountries);
router.get('/countries/:id', obtenerCountry);
router.get('/activities/', obtenerActivities);
router.post('/activities', activity)

module.exports = router;