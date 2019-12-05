import React, { Component } from 'react'
import { connect } from "react-redux";
import { Menu, Segment,Grid  } from 'semantic-ui-react'
import { Route, Redirect, Switch,BrowserRouter,useLocation} from 'react-router-dom'
import './navbar'
import Home from './components/home';
// import CakeComponents from './components/cakeComponents';
import Login from './components/login';
import Messages from './components/messages';
const mapStateToProps =(state)=>{
  return {isLogedIn:state.loginReducer.isLogedIn,active:state.loginReducer.active,phno:state.loginReducer.phno}
}
class navbar extends Component {
    constructor(){
        super();
        
        this.state = { activeItem: 'home' }
    }
    
    handleItemClick = (e, { name }) => {this.setState({ activeItem: name })
    if(name==='messages'){
      this.redirect=<Redirect to={"/"+name+"/12"} push></Redirect>
    }
    else if(name==='logout'){
      console.log('ll')
      localStorage.removeItem('appState')
      this.redirect=<Redirect to={"/"} push></Redirect>
    }
    else{
      this.redirect=<Redirect to={"/"+name} push></Redirect>
    }
 
  
  }
    render() {
        const { activeItem } = this.state
        return (
          <React.Fragment>
            {/* ll  {useLocation()} */}
        <Segment inverted>
                <Menu  pointing secondary inverted>
  <Menu.Item
    name='home'
    active={activeItem === 'home'}
    onClick={this.handleItemClick}
  />
  {this.props.isLogedIn?<Menu.Item
    name='messages'
    active={activeItem === 'messages'}
    onClick={this.handleItemClick}
  />:''}
  <Menu.Item
    name='friends'
    active={activeItem === 'friends'}
    onClick={this.handleItemClick}
  />
   {this.props.isLogedIn?'': <Menu.Item
    name='login'
    active={activeItem === 'login'}
    onClick={this.handleItemClick}
  />}
   {this.props.isLogedIn? <Menu.Item
    name='logout'
    active={activeItem === 'logout'}
    onClick={this.handleItemClick}
  />:''}
</Menu></Segment>
<Grid>
<Grid.Column width={1}>

</Grid.Column>
<Grid.Column width={14}>
<BrowserRouter>
<Segment attached='bottom'>
<Switch>

          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route path="/home" component={Home} />    
          <Route path="/messages/:phno" component={Messages} />
          <Route path="/login" component={Login}/>
        </Switch>
        {this.redirect}
    </Segment></BrowserRouter>
</Grid.Column>
<Grid.Column width={1}>
  
</Grid.Column>
</Grid>


</React.Fragment>       
        )
    }
}

export default navbar = connect(mapStateToProps)(navbar)
