import React from 'react'

const Item = (props) => {
    const { details } = props

    if (!details) {
        return <h3>Fetching</h3>
    }
    return(
        <div className = 'item_container'>
            <h2>{details.item_name}</h2>
            <p>Category: {category_id}</p>
            <p>Description: {item_description}</p>
            <p>Price: {item_price}</p>
        </div>
    )
}

export default Item