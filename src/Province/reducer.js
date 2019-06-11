import {
  PROVINCES_FETCH,
  PROVINCE_SELECT,  
  PROVINCE_FAIL  
} from './types';

const INITIAL_STATE = {
  provinces: [],
  selected: {
  },
  error: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROVINCES_FETCH:
      return { ...state, provinces: action.payload, error: 0 };
    case PROVINCE_SELECT:
      return { ...state, selected: action.payload, error: 0 };    
    case PROVINCE_FAIL:
      return { ...state, error: 1 };    
    default:
      return state;
  }
};