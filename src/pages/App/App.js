import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import { Card, Icon, Image } from 'semantic-ui-react'
import UserPhotos from '../../Components/UserPhotos/UserPhotos'
import './App.css';
import bill from '../../service/billboardService';
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
    {/*
    form to upload pics
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" accept="image/*" name="photo" />
      <input type="submit" value="upload" />
    </form>
    button to fetch top 10
    <button onClick={bill}>Top 10</button> */}
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
