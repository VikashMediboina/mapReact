import {GET_GEOLOCATION,STORE_LOCATION} from './geoTypes'
import {IntialState} from '../initialState'
var intialState=IntialState
console.log(intialState)
var newStore=""
const geoReducer=(state=intialState,action)=>{
    switch(action.type){
        case GET_GEOLOCATION:{
            newStore={
                ...state,
                lat:action.lat,
                lan:action.lan
            }
        
            return newStore
        }
        case STORE_LOCATION:{
            newStore={
                ...state,
                wholeLatAndLan:action.data
            }
            return newStore
        }
        default:{
           
            return state
        }
    }
}
export default geoReducer