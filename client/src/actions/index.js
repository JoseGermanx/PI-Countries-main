
import axios from "axios";
const api = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export function getFlags() {
  return async function (dispatch) {
    let json = await axios(`${api}/countries`, {});
    return dispatch({
      type: "GET_FLAGS",
      payload: json.data,
    });
  };
}

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

 export function filterByPopulation(payload) {
  console.log(payload)
   return {
    type: "FILTER_COUNTRIES_POPULATION",
    payload
  };  
}

 export function orderByName(payload) {
  return {
    type: "ORDER_NAME",
    payload
  };
}

export function getActivity() {
  return async function (dispatch) {
     let json = await axios(`${api}/activities/`, {});
       return dispatch({
        type: "GET_ACTIVITY",
        payload: json.data,
      });    
  };
}

export function byActivity(payload) {
  return {
      type: 'BY_ACTIVITY',
      payload
  }
}

export function bySeason(payload) {
  return {
      type: 'BY_SEASON',
      payload
  }
}

export function getMaps(id) {
  return async function (dispatch) {
    try {
      let json = await axios(`https://restcountries.com/v3/alpha/` + id);
      return dispatch({
        type: "GET_MAPS",
        payload: json.data
      });
    } catch (e) {
      console.log(e);
    }
  };

}