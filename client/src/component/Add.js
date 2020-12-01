import React from 'react'
import { Button } from 'semantic-ui-react'

const Add = () => {
    const [user, setUser] = useState({ name: "", email: "", phone: "" })
    const userReducer = useSelector(state => state.userReducer.user)
    const edit = useSelector(state => state.userReducer.edit)
    useEffect(() => {
        edit ? setUser(userReducer) : setUser({ name: "", email: "", phone: "" })
    }, [edit, userReducer])
    return (
        <div>
            name:<input type="text" />
            email:<input type="text" />
            phone:<input type="text" />
            <Button type="submit">{edit ? "edit" : "Save"}<Button /> 
        </div>
    )
}

export default Add
