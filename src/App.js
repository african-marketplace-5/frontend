import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import BrowsePage from './components/BrowsePage'
<<<<<<< HEAD
import Signup from './components/userportal/signup';
import Login from './components/userportal/login';
=======
import Signup from './components/userportal/Signup';
import Login from './components/userportal/Login';
>>>>>>> 2b3077b55a2c8e478ba6a680378216b655853af2

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
      
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </>
  );
};

export default App;
