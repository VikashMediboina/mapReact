import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import {connect} from 'react-redux'
import socketIOClient from "socket.io-client";

const mapStateToProps =(state)=>{
  
  
  return ({phno:state.loginReducer.phno,Uname:state.loginReducer.UName,lati:state.geoReducer.lat,lani:state.geoReducer.lan,data:state.geoReducer.wholeLatAndLan})
} 


 class maps extends Component{
  state = {
    lat: this.props.lati,
    lng: this.props.lani,
    zoom:13,
  }
  
marks=[]



  render() {
    const position = [this.props.lati,this.props.lani]

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />  
 {/* <Marker position={position}>
          <Popup>
            {position[1]}<br /> {position[0]}
          </Popup>
        </Marker> */}
     {this.markers=this.props.data.map((data)=>{
       console.log(data)
       return(<Marker key={data.phno} position={[data.lat,data.long]}>
       <Popup>
         {data.Uname}<br /> {data.phno }
       </Popup>
     </Marker>)
     })}
     {this.markers}
      </Map>
    )
  }
}

export default maps= connect(mapStateToProps)(maps)