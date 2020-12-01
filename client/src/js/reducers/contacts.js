
//import constant
import {GET_CONNATCTS_FAIL,GET_CONNATCTS_LOAD,GET_CONNATCTS_SUCCESS,GET_CONTACT} from "../constants/contacts";


//initial state
const initialState={
    contacts:[],
    load_contact:false,
    errors:nuul,
    
    user:{}
}


export const contactReducer=(state=initialState,{type,payload})=>{
      switch (type) {
        case GET_CONNATCTS_LOAD:return {...state,load_contact:true}
        case GET_CONNATCTS_SUCCESS:return {...state,contacts:payload,load_contact:false}
        case GET_CONNATCTS_FAIL:return {...state,errors:payload,load_contact:false}
        case GET_CONTACT:return {...state,load_contact:false,user:payload}      
           
      
          default:return state
             
      }
}