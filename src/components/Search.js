import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Search (props) {
    const [itemTypes, setItemTypes] = useState([])
    const { search, change } = props

    function changeSearch (e) {
        const { name, value } = e.target
        change(name, value)
    }

    useEffect(() => {
        axios.get('https://african-marketplace-5.herokuapp.com/api/food_categories/')
            .then(res => setItemTypes(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
      <div className='search'>
        <div className='search-bar'>
            <select
                name='category'
                id='category'
                value={search.category}
                onChange={changeSearch}
            >
                <option value=''>--Select a Product Category--</option>
                {itemTypes.map(type => {return (
                    <option value={type.category} key={type.category}>{type.category}</option>
                )})}
            </select>
            <input
                type='text' 
                value={search.item_name} 
                onChange={changeSearch} 
                name='item_name' 
                placeholder='Item Name' 
            />
        </div>
      </div>
    )
}

export default Search