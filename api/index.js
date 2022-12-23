//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require("axios");
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true}).then(() => {
  console.log('......');
  server.listen(port, async () => {
    const allCountries = Country.findAll(); // se buscan todos los datos en DB

    // se verifica si la tabla countries esta vacia
    if (allCountries.length === 0) {
      const apiUrl = await axios.get("https://restcountries.com/v3/all");
      const apiInfor = apiUrl.data.map((el) => {
    return {
      id: el.cca3,
      name: el.name.common,
      flag: el.flags[0],
      continente: el.continents[0],
      capital:
        typeof el.capital !== "undefined" ? el.capital[0] : "No tiene capital",
      subregion:
        typeof el.subregion !== "undefined"
          ? el.subregion
          : "No pertenece a una subregion",
      area: el.area,
      poblacion: el.population,
    };
    console.log(apiInfor)
  });
      await Country.bulkCreate(apiInfor);
      console.log('Ejecutada bulkCreate en country model ✔ ');
      console.log('...... espera unos segundos');
      console.log('...... casi listo el server');
      console.log('🚀 ');
      
    } else {
      console.log('La base de datos de paises está cargada')
    }
    console.log(`%s listening at ${port} ✈ ` ); // eslint-disable-line no-console
  });
});
