import React from 'react'

function Browse (props) {
    const { selected } = props

    function priceRange (priceArray){
        const range = [priceArray[0], priceArray[0]];
        for (let i = 0; i < priceArray.length; i++){
            if (priceArray[i] < range[0]){
                range[0] = priceArray[i]
            }else if (priceArray[i] > range[1]){
                range[1] = priceArray[i]
            }
        }
        if (range[0] === range[1]){
            return (
                <p>Price: {range[0]}</p>
            )
        }else{
            return (
                <p>Price: {range[0]}-{range[1]}</p>
            )
        }
    }

    return (
        <div className='list-container'>
            <div className='items-list'>
                {selected.map(item => {
                    const { item_name, category, item_id, sellers, prices } = item
                    return (
                        <div className='item-card' key={item_id}>
                            <h2>{item_name}</h2>
                            <h3>{category}</h3>
                            {priceRange(prices)}
                            <p>Sellers: {sellers}</p>
                        </div>
                )})}
            </div>
            <div className='photoBy'>
                <p>Photo by <a href="https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Clode</a> on <a href="https://unsplash.com/s/photos/africa-plains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </div>
        </div>
    )
}

export default Browse