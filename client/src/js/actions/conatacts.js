import Axios from "axios";
import { GET_CONNATCTS_FAIL, GET_CONNATCTS_LOAD, GET_CONNATCTS_SUCCESS, GET_CONTACT } from "../constants/contacts";



export const getContacts = () => async (dispatch) => {
    dispatch({ type: GET_CONNATCTS_LOAD })
    try {
        let result = await Axios.get("/contact")
        dispatch({ type: GET_CONNATCTS_SUCCESS, payload: result.data.response })
    } catch (error) {
        dispatch({ type: GET_CONNATCTS_FAIL, payload: error })
    }

}

export const deleteContact = (id) => (dispatch) => {
    Axios.delete("/contact/delete/${id}").then(res => dispatch(getContact())).catch((err) => console.log(err))
}


export const getContact = (id) => (dispatch) => {
    Axios.get("/contact/delete/${id}").then(res => dispatch({type:GET_CONTACT,payload:res.data.response})).catch((err) => console.log(err))
}
