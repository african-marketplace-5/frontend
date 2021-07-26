import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <>
      <Header />

      <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

    </Switch>
    </>
  );
}

export default App;
