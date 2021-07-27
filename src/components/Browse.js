import React from 'react'

function Browse (props) {
    const { selected } = props

    return (
        <div className='items-list'>
            {selected.map(item => {
                const { item_name, category } = item
                return (
                    <div className='item-card'>
                        <h2>{item_name}</h2>
                        <h3>{category}</h3>
                    </div>
            )})}
        </div>
    )
}

export default Browse