import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FcSearch } from "react-icons/fc";
import { FaBalanceScale } from "react-icons/fa";
import { Link } from 'react-router-dom'


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

            <div id="search-container">
                <FcSearch size="1.5rem" />
                <input
                    id="search"
                    type='text' 
                    value={search.item_name} 
                    onChange={changeSearch} 
                    name='item_name' 
                    placeholder='Item Name' 
                />
            </div>

            <div id="sell-container">
                <FaBalanceScale size="1.4rem" color="green"/>
                <Link to='/add-item' id='sell-button'>Sell Item</Link>
            </div>
        </div>
      </div>
    )
}

export default Search