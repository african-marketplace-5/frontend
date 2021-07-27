import './BrowsePage.css';
import Search from './Search'
import Browse from './Browse'
import React, { useState, useEffect } from 'react';

function BrowsePage() {
  const [search, setSearch] = useState({type: '', subtype: '', name: ''})
  const [items, setItems] = useState([])
  const [selectedItems, setSelectedItems] = useState(items)

// Temporary items list
    useEffect(() =>{
    setItems([
        {
            name: 'potatoes',
            type: 'rootsAndTubers',
            subType: 'potatoes',
            price: '2$/lb',
            owner: 'romy',
            location: 'Kenya',
            description: 'locally grown potatoes'
        },
        {
            name: 'blackberries',
            type: 'fruits',
            subType: "other",
            price: '4$/pint',
            owner: 'romy',
            location: 'Kenya',
            description: 'locally grown blackberries'
        }
    ]);
    }, [])

  function changeSearch(key, value){
    setSearch({...search, [key]: value})
  }

  function selection (type, subType, name){
    console.log(search)
    const select = items.filter(item => item.name.includes(name))
    if (type === '' && subType === ''){
        setSelectedItems(select)
    }else if (subType === ''){
        setSelectedItems(select.filter(item => item.type === type))
    }else if (type === ''){
      setSelectedItems(select.filter(item => item.subType === subType))
    }else{
      const select2 = select.filter(item => item.type === type)
      setSelectedItems(select2.filter(item => item.subType === subType))
    }
  }

  useEffect(() => {
    const { type, subType, name } = search
    selection(type, subType, name)
  }, [search])

  return (
    <div className="browse">
      <Search search={search} change={changeSearch} />
      <Browse selected={selectedItems} />
    </div>
  );
}

export default BrowsePage;
