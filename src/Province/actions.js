import {
  PROVINCES_FETCH,
  PROVINCE_SELECT,
  PROVINCE_FAIL  
} from './types';

export const provinceSelected = (province) => {
  return {
    type: PROVINCE_SELECT,
    payload: province
  }
}

export const fetchProvinces = () => {  
  return dispatch => {      
    return fetch("https://api.tavanito.com/v1/provinces")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {          
        dispatch(fetchProvincesSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(fetchProvincesFailure(error)));
  };
};

function handleErrors(response) {  
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const fetchProvincesSuccess = (provinces) => {
  return {
    type: PROVINCES_FETCH,
    payload: provinces
  };
}

const fetchProvincesFailure = (error) => {  
  return {
    type: PROVINCE_FAIL    
  };
}