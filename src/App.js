import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Heading from './Components/Navbar/Heading';
import AddFood from './Components/AddFood/AddFood';

function App() {
  return (
    <div className="">
      <Router>
        <Heading></Heading>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/addFood'>
            <AddFood></AddFood>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
