// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './conponents/aboutUs/AboutUs';
import Home from './conponents/home/Home';
import Login from './conponents/Login/Login';
import Meals from './conponents/meals/Meals';
import MyOrders from './conponents/myOrders/MyOrders';
import Navigation from './conponents/navigation/Navigation';
import NotFound from './conponents/notFound/NotFound';
import Profile from './conponents/profile/Profile';

function App() {
  return (
    <div>
      <Router>
      <Navigation/>
        <Switch>

          <Route exact path="/">
            <Login/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route exact path="/meals">
            <Meals/>
          </Route>

          <Route exact path="/myOrders">
            <MyOrders/>
          </Route>

          <Route exact path="/profile">
            <Profile/>
          </Route>

          <Route exact path="/about-us">
            <AboutUs/>
          </Route>

          <Route exact path="/logout">
            <Login/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>



      
      
      
    </div>
  );
}

export default App;
