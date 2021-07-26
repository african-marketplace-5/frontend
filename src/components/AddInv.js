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
                    <select
                    onChange = {onChange}
                    value = {values.category}
                    name = 'Category'>
                        <option value = ''>--Category--</option>
                        <option value = 'animalProducts'>Animal Products</option>
                        <option value = 'beans'>Beans</option>
                        <option value = 'cereals'>Cereals</option>
                        <option value = 'fruits'>Fruits</option>
                        <option value = 'other'>Other</option>
                        <option value = 'peas'>Peas</option>
                        <option value = 'rootsAndTubers'>Roots and Tubers</option>
                        <option value = 'seedsAndNuts'>Seeds and Nuts</option>
                        <option value = 'vegetables'>Vegetables</option>
                    </select>
                </label>
                <label>
                    <h3>Sub-Category</h3>
                    <p>{errors.subCat}</p>
                    <select
                    onChange = {onChange}
                    value = {values.subCat}
                    name = 'Sub-Category'>
                        <option value = ''>--Sub-Category--</option>
                        <option value = 'animalProducts'>Animal Products</option>
                        <option value = 'livestock'>Livestock</option>
                        <option value = 'poultry'>Poultry</option>
                        <option value = 'beans'>Beans</option>
                        <option value = 'maize'>Maize</option>
                        <option value = 'barley'>Barley</option>
                        <option value = 'millet'>Millet</option>
                        <option value = 'sorghum'>Sorghum</option>
                        <option value = 'wheat'>Wheat</option>
                        <option value = 'rice'>Rice</option>
                        <option value = 'avocado'>Avocado</option>
                        <option value = 'bananas'>Bananas</option>
                        <option value = 'fruits'>Fruits</option>
                        <option value = 'lemons'>Lemons</option>
                        <option value = 'limes'>Limes</option>
                        <option value = 'mangoes'>Mangoes</option>
                        <option value = 'oranges'>Oranges</option>
                        <option value = 'pawpaw'>Pawpaw</option>
                        <option value = 'pineapples'>Pineapples</option>
                        <option value = 'coffee'>Coffee</option>
                        <option value = 'tea'>Tea</option>
                        <option value = 'tobacco'>Tobacco</option>
                        <option value = 'vanilla'>Vanilla</option>
                        <option value = 'peas'>Peas</option>
                        <option value = 'cassava'>Cassava</option>
                        <option value = 'potatoes'>Potatoes</option>
                        <option value = 'nuts'>Nuts</option>
                        <option value = 'simsim'>Simsim</option>
                        <option value = 'sunflowers'>Sunflowers</option>
                        <option value = 'brinjals'>Brinjals</option>
                        <option value = 'cabbages'>Cabbages</option>
                        <option value = 'capsicums'>Capsicums</option>
                        <option value = 'carrots'>Carrots</option>
                        <option value = 'cauliflower'>Cauliflower</option>
                        <option value = 'chillies'>Chillies</option>
                        <option value = 'cucumber'>Cucumber</option>
                        <option value = 'ginger'>Ginger</option>
                        <option value = 'kales'>Kales</option>
                        <option value = 'lettuce'>Lettuce</option>
                        <option value = 'onions'>Onions</option>
                        <option value = 'tomatoes'>Tomatoes</option>
                    </select>
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

const initialFormValues = {
    name: '',
    category: '',
    subCat: '',
    price: ''
}
const initialFormErrors = {
    name: 'Name is required',
    category: 'Category is required',
    subCat: 'Sub-Category is required',
    price: 'Price is required'  
}

function AddInv(){
    return(
        null
    )
}