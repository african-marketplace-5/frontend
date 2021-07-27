import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/userportal/signup';
import Login from './components/userportal/login';

function App() {
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
          <Login/>
        </Route>
      </Switch>
    </>
  );
};

export default App;
