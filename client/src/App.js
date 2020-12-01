import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactList from "./component/ContactList"
import add from "./component/Add"
import { Button } from "semantic-ui-react"

import { toogle_false } from './js/actions/edit';
function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">

      <Button content='Click Here' onClick={dispatch(toogle_false}>
        <link to='/add'>add contact</link>
        </Button>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={add} />

      </Switch>
    </div>
  );
}

export default App;
