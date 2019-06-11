import {
  DISTRICTS_FETCH,
  DISTRICT_SELECT,  
  DISTRICT_FAIL  
} from './types';

const INITIAL_STATE = {
  districts: [],
  selected: {},
  error: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISTRICTS_FETCH:
      return { ...state, districts: action.payload, error: 0 };
    case DISTRICT_SELECT:
      return { ...state, selected: action.payload, error: 0 };    
    case DISTRICT_FAIL:
      return { ...state, error: 1 };    
    default:
      return state;
  }
};