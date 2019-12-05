import React, { Component } from 'react'
import {connect} from 'react-redux'
import socketIOClient from "socket.io-client";
import { Input } from 'semantic-ui-react'
import { Button , Grid, Label,Icon, Modal} from 'semantic-ui-react'
import Maps from './maps'
import GetGeoLocation from './getGeoLocation';
const mapStateToProps =(state)=>{
    console.log(state)
    
    return ({phno:state.loginReducer.phno,Uname:state.loginReducer.UName})
} 
export class messages extends Component {
    constructor(props){
        super()
        this.state={msg:"",
    msgs:[]}
    }
    getMsg=(e)=>{

        this.setState({msg:e.target.value})
    }
   msgs=[]
  socket = socketIOClient('http://localhost:4000/');
    sendMsg=()=>{
      
        if(this.state.msg) {
            console.log(this.props)
            this.socket.emit('msg', {message: this.state.msg, user: this.props.phno,UName:this.props.Uname,date: new Date()});
         }

    }
    componentDidMount() {
        this.socket.on('newmsg', data=>{    
         this.setState((prevState)=>({msgs:[...(prevState.msgs),data]}))
         
         })
    }

    
    render() {
        
        
        return (
        <div><h1>{this.props.Uname}</h1>
           <h5>{this.state.msgs.map((msg)=>{return(<div key={msg.date} >
            {this.props.phno===msg.user
            ?
           
      <React.Fragment>

      <Label as='a' color='green'  ribbon='right'>  <span style={{color:'black',float:'left'}}  >{msg.UName}
             </span>   &nbsp; &nbsp;&nbsp; &nbsp;
      <span style={{color:'black',float:'right'}}  > {(new Date(msg.date).getHours())+':'+(new Date(msg.date).getMinutes())}</span>
          
      <div>&nbsp;</div>
      
            
      <div><Label pointing='right'>  <span stye={{fontSize: 'xxx-large',fontWeight:'bold'}}>{msg.message}</span></Label></div>
      </Label><br></br></React.Fragment>
      :
       (<React.Fragment>
           
            <Label as='a' color='blue' ribbon>
            <span style={{color:'black',float:'left'}}  >  {msg.UName}</span>&nbsp; &nbsp;&nbsp; &nbsp;
            <span style={{color:'black',float:'right'}} > {(new Date(msg.date).getHours())+':'+(new Date(msg.date).getMinutes())}</span>
       <div>&nbsp;</div>
       <div>
            
       
       <Label color='orange' pointing='right'>
            {msg.message}</Label></div>
      </Label><br></br></React.Fragment>)
      }
               </div>)})}</h5> 

             <Grid>

             <Grid.Column width={11}>
             <Input placeholder='Type Messages'  value={this.state.msg} onChange={this.getMsg}/>
             </Grid.Column> 
             <Grid.Column width={3}>

                <Button content='send' primary onClick={this.sendMsg}/>

             </Grid.Column>
                </Grid><br></br>






                <Modal trigger={<Button icon='group' floated='right'  circular/>} basic size='small'>
    
    <Modal.Content>
      
      <Maps></Maps>
    </Modal.Content>

  </Modal>
                <GetGeoLocation></GetGeoLocation>
        </div>
        )
    }
}

export default messages= connect(mapStateToProps)(messages)
