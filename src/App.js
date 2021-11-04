import { useState } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './context/userContext';
import './css/index.css'

function App() {

  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
      <Switch>
        <Route path='/pokedex/:username'>
          <Pokemon/>
        </Route>
        <ProtectedRoute path="/pokedex">
          <Pokedex />
        </ProtectedRoute>
        <Route path="/" exact component={LogIn} />
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
