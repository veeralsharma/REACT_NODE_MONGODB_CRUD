import React,{Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import Navbar from './components/Navbar';
import RestaurantPage from './components/RestaurantPage';
import Help from './components/Help';
import Profile from './components/Profile';


class App extends Component {
  render(){
  return (
    <Router>
    <div className="App" style={{background:'#f3f3f3'}}>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/help" component={Help} />
      <Route path="/profile" component={Profile} />
      <Route path="/restaurant/id" component={RestaurantPage} />
    </div>
    </Router>
  );
}
}


export default App;
