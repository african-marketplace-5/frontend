import './BrowsePage.css';
import Search from './Search'
import Browse from './Browse'
import React, { useState, useEffect } from 'react';

function BrowsePage() {
  const [search, setSearch] = useState({type: '', name: ''})
  const [items, setItems] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

// Temporary items list
    useEffect(() =>{
    setItems([
        {
            name: 'potatos',
            type: 'vegetable',
            price: '2$/lb',
            owner: 'romy',
            location: 'Kenya',
            description: 'locally grown potatoes'
        },
        {
            name: 'blackberries',
            type: 'fruit',
            price: '4$/pint',
            owner: 'romy',
            location: 'Kenya',
            description: 'locally grown blackberries'
        }
    ])
}, [])


  function changeSearch(key, value){
    setSearch({...search, [key]: value})
  }

  function selection (type, name){
    const select = items.filter(item => item.name.includes(name))
    if (type === ''){
        setSelectedItems(select)
    }else{
        setSelectedItems(select.filter(item => item.name.includes(name)))
    }
  }

  useEffect(() => {
    const { type, name } = search
    selection(type, name)
  }, [search])

  return (
    <div className="App">
      <Search search={search} change={changeSearch} />
      <Browse selected={selectedItems} />
    </div>
  );
}

export default BrowsePage;
