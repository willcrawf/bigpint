import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useParams } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import ProfilePage from '../ProfilePage/ProfilePage'
import { Card, Icon, Image } from 'semantic-ui-react'
import UserPhotos from '../../Components/UserPhotos/UserPhotos'
import './App.css';
import * as authService from '../../service/authService'
//import bill from '../../service/billboardService';


export default function App(props) {
  const [user, setUser] = useState(authService.getUser())

  
  function handleSignupLogin() {
    setUser(authService.getUser())
  }
  function handleLogout() {
    authService.logout()
    setUser(null)
  }
  
  return (
    <>
    <form action="/upload" method="POST" encType="multipart/form-data">
      <input type="file" accept="image/*" name="photo" />
      <input type="submit" value="upload" />
    </form>
    //button to fetch top 10
    //<button onClick={getBill}>Top 10</button>
    <NavBar user={user} handleLogout={handleLogout} />
      <UserPhotos user={user} />
      {/* {props.match || 'nope'} */}
      <Route 
        exact path="/signup"
        render={() => 
          <Signup history={props.history} handleSignupLogin={handleSignupLogin}/>
        }/>
        <Route 
        exact path="/login"
        render={() => 
          <Login history={props.history} handleSignupLogin={handleSignupLogin}/>
        }/>
        
        <Switch>
          <Route path="/google/:gId" children={<CombineUser user={user} setUser={setUser}/>}></Route>
        </Switch>

        <Route 
        exact path="/profile"
        render={() => 
          <ProfilePage
          user={user} />
        }/>
    </>
  );
}

function CombineUser(user, setUser) {
  let { gId } = useParams()
  console.log(gId)
  // authService.combineUser(gId, user)
  return null
}
