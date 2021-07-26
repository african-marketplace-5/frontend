import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import BrowsePage from './components/BrowsePage'

function App() {
  return (
    <>
      <Header />

      <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

      {/*Romy's browse page */}
      <Route exact path='/browse'>
        <BrowsePage />
      </Route>

    </Switch>
    </>
  );
}

export default App;
