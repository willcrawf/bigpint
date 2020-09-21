import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ user, handleLogout }) {
  return (
    <nav id="nav">
      {user ? 
      <>
      <NavLink exact to="/">Home</NavLink>
      <div>Welcome: {user.name}</div>
      <NavLink exact to="/" onClick={handleLogout}>Logout</NavLink>
      <NavLink exact to="/profile">Profile</NavLink>
      </>
      :
      <>
      <NavLink exact to="/signup">SignUp</NavLink>
      <NavLink exact to="/login">Login</NavLink>
      </>
    }
      </nav>
  );
}
