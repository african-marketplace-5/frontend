import React from 'react'

const itemForm = (props) => {
    const { values, update, submit } = props
    const onChange = evt => {
        const {item, value} = evt.target
        update(item, value)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return(
        <form className = 'from container' onSubmit = {onSubmit}>
            <div className = 'form-group inputs'>
                <label htmlFor = 'item_name'>Item Name
                    <input 
                        id = 'item_name'
                        type = 'text'
                        name = 'item_name'
                        onChange = {onChange}
                        value = {values.item_name}
                    />
                </label>
                <label htmlFor = 'category'>Category
                    <select id = 'category' name = 'category' onChange = {onChange} value = {values.category_id}>
                        <option value = ''>--Select Category--</option>
                        <option value = 'animal_products'>Animal Products</option>
                        <option value = 'beans'>Beans</option>
                        <option value = 'cereals_maize'>Cereals Maize</option>
                        <option value = 'cereals_Other'>Cereals Other</option>
                        <option value = 'cereals_rice'>Cereals Rice</option>
                        <option value = 'fruits'>Fruits</option>
                        <option value = 'peas'>Peas</option>
                        <option value = 'roots_and_tubers'>Roots and Tubers</option>
                        <option value = 'seeds_and_nuts'>Seeds and Nuts</option>
                        <option value = 'vegetables'>Vegetables</option>
                        <option value = 'other'>Other</option>
                    </select>
                </label>
                <label htmlFor = 'price'>Price
                    <input
                        id = 'price'
                        type = 'float'
                        name = 'price'
                        onChange = {onChange}
                        value = {values.price}
                    />
                </label>
                <label htmlFor = 'user_item_description'>User Item Description
                    <input
                        id = 'user_item_description'
                        type = 'text'
                        name = 'user_item_description'
                        onChange = {onChange}
                        value = {values.user_item_description}
                    />
                </label>
                <div className = 'submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}



export default itemForm