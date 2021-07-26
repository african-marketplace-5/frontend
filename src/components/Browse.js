import React from 'react'

function Browse (props) {
    const { selected } = props

    return (
        <div className='items-list'>
            {selected.map(item => {
                const { name, type, price, owner, location, description } = item
                return (
                    <div className='item-card'>
                        <h2>{name}, {type}</h2>
                        <h3>{price}</h3>
                        <p>Owned by {owner} in {location}</p>
                        <p>{description}</p>
                    </div>
            )})}
        </div>
    )
}

export default Browse