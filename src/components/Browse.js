import React from 'react'

function Browse (props) {
    const { selected } = props

    return (
        <div className='items-list'>
            {selected.map(item => {
                const { item_name, category, item_id } = item
                return (
                    <div className='item-card' key={item_id}>
                        <h2>{item_name}</h2>
                        <h3>{category}</h3>
                        <p>Price: null</p>
                        <p>Sellers: null</p>
                    </div>
            )})}
        </div>
    )
}

export default Browse