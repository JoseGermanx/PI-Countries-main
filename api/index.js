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
const server = require("./src/app.js");
const { conn, Country } = require("./src/db.js");
const axios = require("axios");
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  console.log("......");
  server.listen(port, async () => {
    const allCountries = Country.findAll();// Consulto por todos los datos en DB
    if (allCountries === null) {
      // verifico si la tabla countries esta vacia
      const apiUrl = await axios.get("https://restcountries.com/v3/all"); // si está vacia, ejecuto axios
      const apiInfor = await apiUrl.data.map((el) => {
        // Guardo datos de la api en una variable
        return {
          id: el.cca3,
          name: el.name.common,
          flag: el.flags[0],
          continente: el.continents[0],
          capital:
            typeof el.capital !== "undefined"
              ? el.capital[0]
              : "No tiene capital",
          subregion:
            typeof el.subregion !== "undefined"
              ? el.subregion
              : "No pertenece a una subregion",
          area: el.area,
          poblacion: el.population,
        };
      });
      await Country.bulkCreate(apiInfor) // inserto en lotes los datos de la api en la tabla de la base de datos
        .then(() =>
          console.log(
            "Ejecutada bulkCreate en country model ✔",
            "...... casi listo el server",
            "🚀 "
          )
        );
    } else {
      // si la tabla ya tenia datos, avanzo
      console.log("La base de datos de paises ya está cargada");
    }
    console.log(`%s listening at ${port} ✈ `); // eslint-disable-line no-console
    });
});
