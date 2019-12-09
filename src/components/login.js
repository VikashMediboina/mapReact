import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { Button, Grid } from 'semantic-ui-react'
import socketIOClient from "socket.io-client";
import { Route, Redirect,Link} from 'react-router-dom'
import { connect } from "react-redux";
import { logina } from '../Redux/login/loginAction';


export class login extends Component {
    constructor(props){
        super()
        this.state={phoneNo:"",userName:''}
       
    }
    getphno=(e)=>{
        this.setState({phoneNo:e.target.value})
    }
    getUName=(e)=>{
        this.setState({userName:e.target.value})
    }
    submitPhoneNo= ()=>{
        const socket = socketIOClient('http://localhost:4000/');
        socket.emit("setUsername",{phno:this.state.phoneNo,username:this.state.userName})
        this.props.logina(this.state)
       
    }
    render() {
        return (
            <div>
      

 <Grid>
        <Grid.Column width={8}>
      <Input icon='user' iconPosition='left' type="number" value={this.state.phoneNo} placeholder='Enter User phone no' onChange={this.getphno} />
      <Grid.Column width={8}>  <Input icon='user' iconPosition='left' type="text" value={this.state.userName} placeholder='Enter User name' onChange={this.getUName} />
      </Grid.Column>
      </Grid.Column> </Grid>
     
      <Link to={"/messages/"+this.state.phoneNo}><Button
            content='login'
            primary
            onClick={this.submitPhoneNo}
          /></Link>
            
     
       
            </div>
        )
    }
 
}
function mapDispatchToProps(dispatch){
    return {
    logina: data=>{dispatch(logina(data))}
    }
  }
export default login= connect(null,mapDispatchToProps)(login)
