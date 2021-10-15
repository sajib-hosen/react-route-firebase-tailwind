// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './conponents/aboutUs/AboutUs';
import AuthProvider from './conponents/context/AuthProvider';
import Home from './conponents/home/Home';
import useFirebase from './conponents/hooks/useFirebase';
import Login from './conponents/Login/Login';
import Meals from './conponents/meals/Meals';
import MyOrders from './conponents/myOrders/MyOrders';
import Navigation from './conponents/navigation/Navigation';
import NotFound from './conponents/notFound/NotFound';
import PrivateRoute from './conponents/privateRoute/PrivateRoute';
import Profile from './conponents/profile/Profile';

function App() {
  const { user } = useFirebase();
  console.log(user.email)
  return (
    <div>
      <AuthProvider>
      <Router>
        {/* conditional Nav bar  */}
        {/* { user.email && <Navigation/> } */} 
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <PrivateRoute exact path="/meals">
            <Meals/>
          </PrivateRoute>
          <PrivateRoute exact path="/myOrders">
            <MyOrders/>
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile/>
          </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
