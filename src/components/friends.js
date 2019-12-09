import React, { Component } from 'react'
import axios from "axios"
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const mapStateToProps=(state)=>{
return {state:state}
}
export class friends extends Component {
constructor(props){
    super()
    this.state={
        users:[]
    }
}
componentDidMount(){
    this.fetchDetails()
}
    fetchDetails=()=>{
    axios.get("http://localhost:4000/users").then((response)=>{
        console.log(response.data)
    this.setState({users:response.data  })
    })
    }
    gotoMessagingapp=()=>{
        
    }

    render() {
        return (
            <div>
            
        {this.state.users.map(data=>{
            if(this.props.state.loginReducer.phno!==data.phno){
                return  <Link to={"/messages/"+data.phno+"/"+data.username}><Card key={data.phno} click={this.gotoMessagingapp(data.username,data.phno)}
              >             <Card.Content>
              <Card.Header>{data.username}</Card.Header>
              <Card.Meta>{data.phno}</Card.Meta> </Card.Content></Card></Link>
   
            
            }   
            else{
                return ""
            }
            })}
            </div>
        )
    }
}

export default friends=connect(mapStateToProps)(friends)
