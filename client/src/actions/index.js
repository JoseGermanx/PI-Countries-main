
import axios from "axios";
const api = 'https://countriespi-back.onrender.com'

export function getCountries() {
  return async function (dispatch) {
    let json = await axios(`${api}/countries`, {});
    return dispatch({
      type: "GET_COUNTRIES",
      payload: json.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let json = await axios(`${api}/countries/` + id);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getByName(name) {
  return async function (dispatch)
 {
  try {
    let json = await axios(`${api}/countries?pais=` + name);
      return dispatch({
        type: "GET_NAME",
        payload: json.data
      });

  } catch (e) {
    console.log(e);
  }
 }}