import {GET_GEOLOCATION} from './geoTypes'
export const getGeolocation =(data)=>{
    return{
        type:GET_GEOLOCATION,
        lat:data.lat,
        lan:data.lan
    }
}