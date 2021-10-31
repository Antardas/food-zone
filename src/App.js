
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
import FoodDetail from './Components/FoodDetail/FoodDetail';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';

function App() {
  //Add to cart  
  let [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (food) => {
    const exist = cartItems.find(item => item._id === food._id);
    let newCart = [];
    
    if (exist) {
      const rest = cartItems.filter(cartItem => cartItem._id != food._id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, food];
      console.log(exist, food);
      
    }
    else {
      food.quantity = 1;
      newCart = [...cartItems, food];
    }
    setCartItems(newCart);
  }

  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Heading cart={cartItems}></Heading>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/addFood'>
              <AddFood></AddFood>
            </PrivateRoute>
            <PrivateRoute path='/foodDetail/:id'>
              <FoodDetail handleAddToCart={handleAddToCart}></FoodDetail>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/cart'>
              <Cart foods={cartItems}></Cart>
            </Route>
            <Route path="*">
              <h3>Not Found</h3>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
