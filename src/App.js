import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Pokedex from './components/Pokedex';
import './css/index.css'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="./pokedex" component={Pokedex}/>
        </Switch>
    </Router>
  );
}

export default App;
