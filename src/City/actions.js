import {
  CITIES_FETCH,
  CITY_SELECT,
  CITY_FAIL  
} from './types';

export const citySelected = (city) => {
  return {
    type: CITY_SELECT,
    payload: city
  }
}

export const fetchCities = (province) => {    
  return dispatch => {    
    return fetch("https://api.tavanito.com/v1/provinces/"+province.id+"/cities")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {          
        dispatch(fetchCitiesSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(fetchCitiesFailure(error)));
  };
};

function handleErrors(response) {  
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const fetchCitiesSuccess = (cities) => {
  return {
    type: CITIES_FETCH,
    payload: cities
  };
}

const fetchCitiesFailure = (error) => {  
  return {
    type: CITY_FAIL    
  };
}