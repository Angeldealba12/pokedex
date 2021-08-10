import { useState } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Pokedex from './components/Pokedex';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './context/userContext';
import './css/index.css'

function App() {
  
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
      <Switch>
        <Route path="/" exact component={LogIn} />
        <ProtectedRoute path="/pokedex">
          <Pokedex />
        </ProtectedRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
