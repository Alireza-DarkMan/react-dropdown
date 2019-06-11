import {
  DISTRICTS_FETCH,
  DISTRICT_SELECT,
  DISTRICT_FAIL  
} from './types';

export const districtSelected = (district) => {
  return {
    type: DISTRICT_SELECT,
    payload: district
  }
}

export const fetchDistricts = (province, city) => {    
  return dispatch => {    
    return fetch("https://api.tavanito.com/v1/provinces/"+province.id+"/cities/"+city.id+"/districts")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {          
        dispatch(fetchDistrictsSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(fetchDistrictsFailure(error)));
  };
};

function handleErrors(response) {  
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const fetchDistrictsSuccess = (districts) => {
  return {
    type: DISTRICTS_FETCH,
    payload: districts
  };
}

const fetchDistrictsFailure = (error) => {  
  return {
    type: DISTRICT_FAIL    
  };
}