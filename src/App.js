import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/userportal/signup';
import Login from './components/userportal/login';

const initialUserId = 'guest'

function App() {
  const [ userId, setUserId ] = useState(initialUserId);

  const userLogin = (id) => {
    setUserId(id)
  }
  
  return (
    <>
      <Header />

      <Switch>
      
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/signup' component={Signup}>
          <Signup/>
        </Route>
        <Route path='/login' component={Login}>
          <Login userLogin={userLogin}/>
        </Route>

      </Switch>
    </>
  );
};

export default App;
