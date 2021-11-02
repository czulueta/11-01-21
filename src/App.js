import React from "react"
import { Switch, Route } from "react-router-dom"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import Navbar from "./Navbar.js"

export default function App(){
  return(
    <div>
      <Navbar />
      <Switch>
        <Route 
          exact path="/"
          render={() => <Auth />}
        />
        <Route 
          path="/profile"
          render={() => <Profile />}
        />
        <Route 
          path="/public"
          render={() => <Public />}
        />
      </Switch>
    </div>
  )
}