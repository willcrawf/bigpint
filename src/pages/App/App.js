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
import exifImg from '../../service/gpsService';

export default function App(props) {
  const [user, setUser] = useState(authService.getUser())

  
  function handleSignupLogin() {
    setUser(authService.getUser())
  }
  function handleLogout() {
    authService.logout()
    setUser(null)
  }
  function getinfo()
  {
    exifImg();
  }
  return (
    <>
    <form action="/upload" method="POST" encType="multipart/form-data">
      <input type="file" accept="image/*" name="photo" />
      <input type="submit" value="upload" />
    </form>
    <img src={`images/a.jpeg`} id="pic" alt=""></img>
    {/* button to fetch exif and billboard info */}
    <button onClick={getinfo}>Info</button>
    <table>
      <tbody>
      <tr>
        <td id="loc"></td><td id="dates"></td>
      </tr>
      <tr><td id="songs" colSpan="2"></td></tr>
      </tbody>
    </table>
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
