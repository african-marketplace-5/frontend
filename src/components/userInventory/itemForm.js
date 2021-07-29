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