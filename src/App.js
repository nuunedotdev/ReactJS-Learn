import List from './components/contacts/List';
import Add from './components/contacts/Add';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Alert } from 'react-bootstrap';

import TopNavbar from './components/app-layouts/TopNavbar';

function App() {
  return (
    <Router>
      <TopNavbar/>
      <Switch>
        <Route path="/" exact>
          <List />
          
          <Alert variant="primary">This is Come Alert</Alert>
        </Route>
        <Route path="/add" exact>
            <Add name="Abdulkadir"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
