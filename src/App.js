import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Breakfast from './components/Menubar/Breakfast/Breakfast';
import Dinner from './components/Menubar/Dinner/Dinner';
import Lunch from './components/Menubar/Lunch/Lunch';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Home></Home>
        <Switch>
          <Route exact path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route exact path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route exact path="/dinner">
            <Dinner></Dinner>
          </Route>
        </Switch>
        <Checkout></Checkout>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
