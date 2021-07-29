import './BrowsePage.css';
import Search from './Search'
import Browse from './Browse'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function BrowsePage() {
  const [search, setSearch] = useState({category: '', item_name: ''})
  const [items, setItems] = useState([])
  const [selectedItems, setSelectedItems] = useState(items)

// Temporary items list
  useEffect(() =>{
    axios.get('https://african-marketplace-5.herokuapp.com/api/items/')
      .then(res => {
        setItems(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  function changeSearch(key, value){
    setSearch({...search, [key]: value})
  }

  function selection (category, item_name){
    const select = items.filter(item => item.item_name.toLowerCase().includes(item_name.toLowerCase()))
    if (category === ''){
        setSelectedItems(select)
    }else{
        setSelectedItems(select.filter(item => item.category === category))
    }
  }

  useEffect(() => {
    const {category, item_name } = search
    selection(category, item_name)
  }, [search]) // eslint-disable-line

  return (
    <div className="browse">
      <Search search={search} change={changeSearch} />
      <Browse selected={selectedItems} />
    </div>
  );
}

export default BrowsePage;
