import React from 'react'
import { getContacts } from '../js/actions/conatacts'
import Contact from "./Contact"

const ContactList = () => {
     const dispatch = useDispatch()
    const contact = useSelector(state => state.contactReducer.contacts)
    const load_contact = useSelector(state => state.contactReducer.load_contact)
     useEffect(() => {
       dispatch(getContacts)
     }, [])
    return (
        <div>
           {load_contact? (<h2>loading</h2>):(contact.map((el)=>  <Contact key={el.id} contact={el} />
           ))}
            
        </div>
    )
}

export default ContactList

