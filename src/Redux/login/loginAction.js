import {LOGED_IN} from './loginTypes'
export const logina = (data)=>{
    return{
        type:LOGED_IN,
        phNo:data.phoneNo,
        UName:data.userName
    }
}