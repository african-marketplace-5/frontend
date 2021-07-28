import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import userFormSchema from './validation/userFormSchema';
import { reach } from 'yup';
import { useHistory } from 'react-router-dom'

//Signup styles
const StyledSignup = styled.div`
height: 50vh;
display:flex;
flex-flow:column;
align-items:center;
justify-content:center;
font-family: 'Roboto', sans-serif;



h2 {
    margin:2%;
    font-size:1.2rem;
}

form {
    display:flex;
    flex-flow:column;
    width:80%;
    border: inset 5px #228B22;
    border-radius: 10px;
    padding: 2%;
}

div.form-inputs {
    width: 80%;
    align-self:center;
    display:flex;
    flex-flow:column;
    align-items:flex-start;
}
div.submit{
    align-self:center;
    margin: 1%;
}
label{
    width: 100%;
    margin: 1.5%;
}
label a{
    text-decoration:none;
}
input, select {
    margin-left: 1%;
}

.errors {
    position:absolute;
    left:60%;
    top: 27.5%;

}
.errors > div{
    font-size: .8rem;
    margin-bottom: 3%;
}
`

//Initial database of users
const initialLocation= [];
//Signup form state initial values and errors
const initialUserFormValues = {
    username: '',
    password: '',
    location_id: null,
    tos: false,
};
const initialUserFormErrors = {
    username: '',
    password: '',
    location_id: '',
    tos: false,
};
const initialDisabled = true;

export default function Signup() {
    const [ location, setLocation ] = useState(initialLocation);
    const [disabled, setDisabled] = useState(initialDisabled);
    //Signup form values and errors
    const [ userFormValues, setUserFormValues ] = useState(initialUserFormValues);
    const [ userFormErrors, setUserFormErrors] = useState(initialUserFormErrors);

    // Get database of locations and set as users state, uSED TEST API
    const getLocation = () => {
        axios.get('https://african-marketplace-5.herokuapp.com/api/locations/')
        .then(res => {
            setLocation(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    };

    //SIGNUP FORM
        // Submit new user information and post new user to API, USED TEST API
            const history = useHistory();
            const postNewUser = newUser => {
            axios.post('https://african-marketplace-5.herokuapp.com/api/auth/register/', newUser)
            //Used a push to history instead of a route 
            .then(res => {
                console.log(res.data);
                setUserFormValues(initialUserFormValues)
                history.push('/login');
            })
            .catch(err => {
                console.log(err.stack);
            })
        };

        const submitUserForm = () => {
            const newUser = {
                username: userFormValues.username,
                password: userFormValues.password,
                location_id: userFormValues.location_id,
            };
            // console.log(newUser);
            postNewUser(newUser);
        };
        // Signup form errors and validation
        const validateNewUser = (name, value) => {
            reach(userFormSchema, name)
            .validate(value)
            .then(() => setUserFormErrors({ ...userFormErrors, [name]: ''}))
            .catch(err => setUserFormErrors({ ...userFormErrors, [name]: err.errors[0]}))
        };

        const updateUserForm = (inputName, inputValue) => {
            validateNewUser(inputName, inputValue);
            setUserFormValues({ ...userFormValues, [inputName]: inputValue});
        };


    // UseEffect hook and rendering for location api
    useEffect(() => {
        getLocation()
    }, []);
    
    useEffect(() => {
        userFormSchema.isValid(userFormValues)
        .then(valid => setDisabled(!valid))
    }, [userFormValues]);

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        updateUserForm(name, valueToUse);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        submitUserForm();
    };
    

    return (
            <StyledSignup>
                <form className='form-container' onSubmit={onSubmit}>
                    <h2>Create an account:</h2>
                    <div className='form-inputs'>
                        <label htmlFor='username'>First name: 
                            <input 
                            id='username'
                            type='text'
                            name='username'
                            onChange={onChange}
                            value={userFormValues.username}/>
                        </label>
                        <label htmlFor='password'> Password: 
                            <input 
                            id='password'
                            type='password'
                            name='password'
                            onChange={onChange}
                            value={userFormValues.password}/>
                        </label>
                        <label htmlFor='size'>Location:
                    <select id='location-dropdown' name='location_id' onChange={onChange} value={userFormValues.location_id}>
                    <option value={null}>--</option>
                    {location.map(elem => {
                        return(
                            <option key={elem.location_id} value={elem.location_id}>{elem.location_name}</option>
                        )  
                    })}
                    </select>
                    </label>
                        <label htmlFor='tos'> By checking here, I accept <a href='#'>African Marketplace's Terms of Service</a>:
                                <input 
                                id='tos'
                                type='checkbox'
                                name='tos'
                                onChange={onChange}
                                checked={userFormValues.tos}/>
                    </label>
                    </div>
                    <div className='submit'>
                    <button disabled={disabled}>Submit</button>
                    </div>
                    <div className='errors'>
                        <div>{userFormErrors.username}</div>
                        <div>{userFormErrors.password}</div>
                        <div>{userFormErrors.location_id}</div>
                        <div>{userFormErrors.tos}</div>
                    </div>
                </form>                
            </StyledSignup>
    );
};

