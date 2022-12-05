const { Router } = require('express');
const axios = require('axios');
const {Country, Activity} = require ('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const getApiInfo = async() => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfor  = await apiUrl.data.map( el => {
        return {
            name: el.name.common,
            subregion: el.subregion,
            flag: el.flags[1],
            continente: el.continents,

        }
    });
    return apiInfor;
};

const getDbInfo = async() => {
    return await Country.findAll({
        include:{
            model: Activity,
            attributes: ['nombre'],
            through: {
                attributes: [],
            },
        }
    })
}

const getAllCountry = async() => {
    let apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async (req, res) => {
    let countriesTotal = await getAllCountry();
    try {
        
        res.status(200).send(countriesTotal);
      } catch(err) {
        res.status(400).json({ error: err.message });
      }
     
})

module.exports = router;
