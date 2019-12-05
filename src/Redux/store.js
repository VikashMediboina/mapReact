import{createStore} from 'redux'
import loginReducer from'./login/loginReducer'
import geoReducer from './geolocation/geoReducer'
import {combineReducers} from 'redux'
const store = createStore(combineReducers({
    geoReducer,
    loginReducer,
  }))

export default store