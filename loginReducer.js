import {LOGED_IN} from './loginTypes'
import {IntialState} from '../initialState'
var intialState=IntialState
console.log(intialState)
intialState=localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : intialState;
var newStore=""
const loginReducer=(state=intialState,action)=>{
    switch(action.type){
        case LOGED_IN:{
            newStore={
                ...state,
                isLogedIn:true,
                phno:action.phNo,
                UName:action.UName
            }
            localStorage.setItem('appState', JSON.stringify(newStore));
            console.log(state)
            return newStore}
        default:{
           
            return state
        }
    }
}

export default loginReducer