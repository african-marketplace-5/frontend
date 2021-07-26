import * as yup from 'yup'
import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'
const addInv = yup.object.shape({
    name: yup.string()
        .required('Must input a name'),
    category: yup.string()
        .required('Must input a category'),
    subCat: yup.string()
        .required('Must input a sub-category'),
    price: yup.string()
        .required('Must input a price')
})

const Addform = (props) => {
    const {values, submit, change, errors, disabled} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return(
        <div className = 'addFormDiv'>
            <h2>Create a new listing</h2>
            <form onSubmit = { onSubmit }>
                <div className = 'errors'>
                    /* empty for now */
                </div>
                <label>                    
                    <h3>Item name</h3>
                    <p>{errors.name}</p>
                    <input name = 'name' type = 'text' value = {values.name} onChange = {onChange}/>
                </label>
                <label>
                    <h3>Category</h3>
                    <p>{errors.category}</p>
                    <input name = 'name' type = 'text' value = {values.name} onChange = {onChange}/>
                </label>
                <label>
                    <h3>Sub-Category</h3>
                    <p>{errors.subCat}</p>
                    <input name = 'name' type = 'text' value = {values.name} onChange = {onChange}/>
                </label>
                <label>
                    <h3>Price</h3>
                    <p>{errors.price}</p>
                    <input name = 'name' type = 'text' value = {values.name} onChange = {onChange}/>
                </label>
                <button id = 'submit' disabled = {disabled}>Submit</button>
            </form>
        </div>
    )
}


function AddInv(){
    return(
        null
    )
}