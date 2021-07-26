import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Browse from './components/Browse'
import Header from '../../src/components/Header'
import React, { useState } from 'react';

function App() {
  const [search, setSearch] = useState({type: '', name: ''})

  function changeSearch(key, value){
    setSearch({...search, [key]: value})
  }

  return (
    <div className="App">
      <Header />
      <Search search={search} change={changeSearch} />
      <Browse search={search} />
    </div>
  );
}

export default App;
