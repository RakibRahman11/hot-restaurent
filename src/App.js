import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
