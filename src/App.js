import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import BrowsePage from './components/BrowsePage'
import Signup from './components/userportal/signup';
import Login from './components/userportal/login';
import ItemForm from "./components/userInventory/itemForm.js"

function App() {
  const [ userId, setUserId ] = useState("guest");
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  }

  const userLogin = (id) => {
    setUserId(id)
  };
  
  return (
    <>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Switch>

        <Route path='/signup' component={Signup}>
          <Signup/>
        </Route>

        <Route path='/login' component={Login}>
          <Login login={login} userLogin={userLogin}/>
        </Route>

        {/*Romy's browse page */}
        <Route exact path='/browse'>
          <BrowsePage />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <ItemForm exact path='/add-item'/>
        </Route>
    
      </Switch>
    </>
  );
};

export default App;
