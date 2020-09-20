import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import { Card, Icon, Image } from 'semantic-ui-react'
import UserPhotos from '../../Components/UserPhotos/UserPhotos'
import './App.css';
import * as authService from '../../service/authService'


class App extends Component {
  state = {
    user: authService.getUser()
  }

  handleSignupLogin = () => {
    this.setState({user: authService.getUser()})
  }
  handleLogout = () => {
    authService.logout()
    this.setState({user: null})
  }
  render() {
    const { user } = this.state;
  return (
    <>
    <NavBar user={user} handleLogout={this.handleLogout} />
      <UserPhotos user={user}/>
      <Route 
        exact path="/signup"
        render={() => 
          <Signup history={this.props.history} handleSignupLogin={this.handleSignupLogin}/>
        }/>
        <Route 
        exact path="/login"
        render={() => 
          <Login history={this.props.history} handleSignupLogin={this.handleSignupLogin}/>
        }/>
    </>
  );
}
}

export default App;
