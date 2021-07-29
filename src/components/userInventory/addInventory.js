import itemForm from './itemForm'
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Item from './item'

const initialFormValues = {
    user_item_description: '',
    user_item_price: 0,
}

const addItem = (props) => {
    const {itemId, userId} = props
    const [items, setItem] = useState
    const [formValues, setFormValues] = useState(initialFormValues)
    const updateForm = (inputItem, inputValue) => {
        setFormValues({ ...formValues, [inputItem]: inputValue})
    }
    const submitForm = () => {
        const newItem = {
            user_item_description: formValues.user_item_description.trim(),
            user_item_price: formValues.user_item_price.trim(),
            item_id: itemId,
            user_id: userId
        }
        if (!newItem.user_item_price || !itemId || !userId){
          console.log('something went wrong')  
        }else{
            axios
                .post('https://african-marketplace-5.herokuapp.com/api/user_items/', newItem)
                .then(res => {
                    const itemFromBackend = res.data
                    setItem([itemFromBackend, ...items])
                    setFormValues(initialFormValues)
                })
                .catch(err => console.log(err.message))
        }
        
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