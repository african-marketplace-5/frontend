import itemForm from './itemForm'
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Item from './item'

const initialFormValues = {
    user_item_description: '',
    user_item_price: '',
    item_name: '',
    category_id: ''
}

const addItem = () => {
    const [items, setItem] = useState
    const [formValues, setFormValues] = useState(initialFormValues)
    const updateForm = (inputItem, inputValue) => {
        setFormValues({ ...formValues, [inputItem]: inputValue})
    }
    const submitForm = () => {
        const newItem = {
            user_item_description: formValues.user_item_description.trim(),
            user_item_price: formValues.user_item_price.trim(),
            item_name: formValues.item_name.trim(),
            category_id: formValues.category_id
        }
        if (!newItem.user_item_description || !newItem.user_item_price) return
        axios.post('https://african-marketplace-5.herokuapp.com/api/user_items/', newItem)
            .then(res => {
                const itemFromBackend = res.data
                setItem([itemFromBackend, ...item])
                setFormValues(initialFormValues)
            })
    }
    useEffect(() => {
        axios.get('https://african-marketplace-5.herokuapp.com/api/user_items/').then(res => setItem(res.data))
    },[])
    return (
        <div className = 'addItem'>
            <h1>Add Item</h1>
            <itemForm 
            values = {formValues}
            update = {updateForm}
            submit = {submitForm}
            />

            {
                items.map(item => {
                    return(
                        <Item key = {item.id} details = {item} />
                    )
                })
            }
        </div>
    )
}