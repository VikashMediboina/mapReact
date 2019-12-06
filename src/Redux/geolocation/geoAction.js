import {GET_GEOLOCATION,STORE_LOCATION} from './geoTypes'

export const getGeolocation =(data)=>{
    return{
        type:GET_GEOLOCATION,
        lat:data.lat,
        lan:data.long
    }
}
export const storLocation =(data)=>{
    return{
        type:STORE_LOCATION,
        data:data
    }
}