import {
  CITIES_FETCH,
  CITY_SELECT,  
  CITY_FAIL  
} from './types';

const INITIAL_STATE = {
  cities: [],
  selected: {},
  error: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CITIES_FETCH:
      return { ...state, cities: action.payload, error: 0 };
    case CITY_SELECT:
      return { ...state, selected: action.payload, error: 0 };    
    case CITY_FAIL:
      return { ...state, error: 1 };    
    default:
      return state;
  }
};