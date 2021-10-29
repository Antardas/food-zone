
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Heading from './Components/Navbar/Heading';
import AddFood from './Components/AddFood/AddFood';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
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
            <Route path="*">
              <h3>Not Found</h3>
            </Route>
          </Switch>
        </Router>
</AuthProvider>

    </div>
  );
}

export default App;
