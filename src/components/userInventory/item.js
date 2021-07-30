import React from 'react'

const Item = (props) => {
    const { details } = props

    if (!details) {
        return <h3>Fetching</h3>
    }

    return(
        <div className = 'item_container'>
            <h2>{details.item_name}</h2>
            <p>Category: {details.category_id}</p>
            <p>Description: {details.item_description}</p>
            <p>Price: {details.item_price}</p>
        </div>
    )
}

export default Item