import React from "react";
import { geolocated } from "react-geolocated";
import { connect } from "react-redux";
import {getGeolocation} from '../Redux/geolocation/geoAction'
import socketIOClient from "socket.io-client";
const mapStateToProps =(state)=>{
    console.log(state)
    
    return ({phno:state.loginReducer.phno,Uname:state.loginReducer.UName})
}
class getGeolocations extends React.Component {
    constructor(props){
        super()
    }
    socket = socketIOClient('http://localhost:4000/');

    findGeolocation = (Available,Enabled,lat,long)=>{
        if(!Available){
           return ("Your browser does not support Geolocation")
        }else{
            if(!Enabled){
                return( "Geolocation is not enabled")
            }
            else{
               var k={lat:lat,long:long}
               this.props.getGeolocation(k)
               this.socket.emit('maps',{lat:lat,long:long,Uname:this.props.Uname,phno:this.props.phno})
                console.log(k)
                
            }
        }
    }
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (

            <div>
           {this.findGeolocation(this.props.isGeolocationAvailable,this.props.isGeolocationEnabled,this.props.coords.latitude,this.props.coords.longitude)}

            </div>

        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return {
        getGeolocation: data=>{dispatch(getGeolocation(data))}
    }
  }
export default getGeolocations= connect(mapStateToProps,mapDispatchToProps) (geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    watchPosition: true,
    userDecisionTimeout: 5000,
})(getGeolocations));