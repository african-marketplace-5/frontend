import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import axiosWithAuth from '../../utils/axiosWithAuth.js'
import axios from 'axios'



const EditForm = props => {

    //This will requires some editing when the component is implemented
    const { item, user_id } = props

    const [formValues, setFormValues] = useState({user_item_price: '', user_item_description: ''})
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        axios.get('https://african-marketplace-5.herokuapp.com/api/items')
            .then(res => setItemList(res.data))
            .catch(err => console.log(err))
    })

    if (!item){
        return (
            <p>Fetching...</p>
        )
    }

    const { user_item_id, item_name, user_item_description, user_item_price } = item

    const initialFormValues  = {
        user_item_price: user_item_price,
        user_item_description: user_item_description
    }

  const deleteLink = `https://african-marketplace-5.herokuapp.com/api/user_items/?user_item_id=${user_item_id}`
  const postLink = `https://african-marketplace-5.herokuapp.com/api/user_items/`
  const checkLink = `https://african-marketplace-5.herokuapp.com/api/user_items/filter/${user_id}`
  
  const handleChange = evt => {
      const { name, value } = evt.target
      setFormValues({ ...formValues, [name]: value })
}

  const handleSubmit = evt => {
    evt.preventDefault()

        const editedItem = {
            item_id: '',
            user_item_description: formValues.user_item_description,
            use_item_price: formValues.user_item_price,
            user_id: user_id
        }

        const idObject = itemList.find(item => item.item_name = item_name)
        editedItem.item_id = idObject.item_id

        // The .thens may require editing
        axios.delete(deleteLink)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        axios.post(postLink, editedItem)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))

        axios.get(checkLink)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return(
        <>
            <Title>Edit Item Listing</Title>
            <StyledForm className = 'form-container' onSubmit = {handleSubmit}>
                <div className = 'form-group inputs'>

                    <label htmlFor = 'item-description'>Description
                            <input
                                name='user_item_description'
                                id='item-description'
                                type='text'
                                onChange={handleChange}
                                value={formValues.user_item_description}
                            />
                        </label>
                        
                    <label htmlFor = 'price'>Price
                        <input
                            name='user_item_price'
                            id='price'
                            type='number'
                            onChange={handleChange}
                            value={formValues.user_item_price}
                        />
                    </label>

                    <div className = 'submit'>
                        <button>Submit</button>
                    </div>
                </div>
            </StyledForm>
        </>
    )
}


const StyledForm = styled.form`
border: solid black 3px;
border-radius: 10px;
padding: 10px;
width: 50%;
margin: auto;
margin-top: 50px;
display: flex;
justify-content: center;

input {
    margin-left: 9px;
}

.submit {
    text-align: center;
    margin-top: 50px;
}
`
const Title = styled.h2`
padding: 25px;
color: white;
background-color: #e89910;
text-align: center;
font-family: 'Roboto', sans-serif;
`


export default EditForm