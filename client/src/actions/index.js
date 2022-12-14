import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    let json = await axios("http://localhost:3001/countries", {});
    return dispatch({
      type: "GET_COUNTRIES",
      payload: json.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let json = await axios("http://localhost:3001/countries/" + id);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data
      });
    } catch (e) {
      console.log(e);
    }
  };
}
