
import axios from "axios";
const api = 'https://countriespi-back.onrender.com'
// const api = 'http://localhost:3001'

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

 export function postActivity (payload) {
  
  return async function (dispatch) {
    const resPost = await axios.post(`${api}/activities`, payload)
    console.log(resPost)
    return resPost;
  }
 }

 export function filterCountryByConti(payload) {
    console.log(payload)
     return {
      type: "FILTER_COUNTRIES_CONTINENT",
      payload
    };  
 }

 export function orderByName(payload) {
  return {
    type: "ORDER_NAME",
    payload
  };
}