import './BrowsePage.css';
import Search from './Search'
import Browse from './Browse'
import React, { useState } from 'react';

function BrowsePage() {
  const [search, setSearch] = useState({type: '', name: ''})

  function changeSearch(key, value){
    setSearch({...search, [key]: value})
  }

  return (
    <div className="App">
      <Search search={search} change={changeSearch} />
      <Browse search={search} />
    </div>
  );
}

export default BrowsePage;
