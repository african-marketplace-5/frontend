import React from 'react'

function Search (props) {
    const { search, change } = props

    function changeSearch (e) {
        const { name, value } = e.target
        change(name, value)
    }

    return (
        <div className='search-bar'>
            <label htmlFor='type'>Type:</label>
            <select
                name='type'
                id='type'
                value={search.type}
                onChange={changeSearch}
            >
                <option value=''>--Select a Product Type--</option>
            </select>
            <input
                type='text' 
                value={search.name} 
                onChange={changeSearch} 
                name='name' 
                placeholder='Item Name' 
            />
        </div>
    )
}

export default Search