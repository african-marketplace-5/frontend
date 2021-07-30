import React, { useState } from 'react'
import styled from "styled-components"
import axiosWithAuth from '../../utils/axiosWithAuth.js'
//This import is for testing and should be deleted
import DeleteMe from './DeleteMe'

const initialFormValues  = {
  price: '',
  description: ''
}

const ItemForm = props => {
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const handleChange = evt => {
      const { name, value } = evt.target
      setFormValues({ ...formValues, [name]: value })
}

  const handleSubmit = evt => {
    evt.preventDefault()

    console.log(formValues)

    axiosWithAuth()
        .post('/items', formValues)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}
    return(
        <>
            {/*The next line is for testing and should be deleted */}
            <DeleteMe />

            <Title>Post Item Listing</Title>
            <StyledForm className = 'from container' onSubmit = {handleSubmit}>
                <div className = 'form-group inputs'>

                    <label htmlFor = 'item-description'>Item
                            <input
                                name='description'
                                type='text'
                                onChange={handleChange}
                                value={formValues.description}
                            />
                        </label>
                        
                    <label htmlFor = 'price'>Price
                        <input
                            name='price'
                            type='number'
                            onChange={handleChange}
                            value={formValues.price}
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


export default ItemForm