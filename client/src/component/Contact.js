import React from 'react'
import {Button,Card,Image} from "semantic-ui-react"
import { getContacts } from '../js/actions/conatacts';
import { toogle_true } from '../js/actions/edit';


const Contact = ({ contact }) => {
    const dispatch = useDispatch()
    return (
      
           
              <Card>
                <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src='/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>{contact.name}</Card.Header>
                  <Card.Meta>{contact.emil}</Card.Meta>
                  <Card.Description>
                   {contact.phone}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                  <link to={"/edit/${contact._id}"}>
                    <Button basic color='green' onClick={()=> {dispatch(getContact(contact._id)) ; dispatch(toogle_true())} }>
                     edit
                    
                    </Button>
                    </link>
                    <Button basic color='red' onClick={()=>dispatch(deleteContact(contact._id))}  >
                     delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>
    )};
export default Contact
