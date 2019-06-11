import { combineReducers } from "redux"
import provinceReducer from "./Province/reducer"
import cityReducer from "./City/reducer"
import districtReducer from "./District/reducer"

export default combineReducers({
  province: provinceReducer,
  city: cityReducer,
  district: districtReducer,
})