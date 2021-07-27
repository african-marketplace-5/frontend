import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reach } from 'yup';
import userFormSchema from './validation/formSchema';
import Login from './login'
import Signup from './signup'
import { Route, Switch } from 'react-router-dom'

//Initial database of users
const initialUsers = [];
//Signup form state initial values and errors
const initialUserFormValues = {
    id: '',
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    tos: false,
};
const initialUserFormErrors = {
    id: '',
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    tos: false,
};

//Login form state initial values and errors
const initialLoginFormValues = {
    email: '',
    password: '',
};
const initialDisabled = true;


export default function Userportal(props) {
    const [ users, setUsers ] = useState(initialUsers);
    const [disabled, setDisabled] = useState(initialDisabled);
    //Signup form values and errors
    const [ userFormValues, setUserFormValues ] = useState(initialUserFormValues);
    const [ userFormErrors, setUserFormErrors] = useState(initialUserFormErrors);
    //Login form values and errors
    const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues);
    const [ loginFormErrors, setLoginFormErrors] = useState(initialFormErrors);
    
// Get database of users and set as users state
    const getUsers = () => {
        axios.get('API LINK HERE')
        .then(res => {
            setUsers(res.'API DATA LOCATION HERE');
        })
        .catch(err => {
            console.log(err);
        });
    };

//SIGNUP FORM
    // Submit new user information and post new user to API
    const postNewUser = newUser => {
        axios.post('API LINK HERE', newUser)
        .then(res => {
            setUsers([res.'API DATA LOCATION HERE', ...users]);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setUserFormValues(initialUserFormValues)
        })
    };

    const submitUserForm = () => {
        const newUser = {
            id: users.length + 1,
            first_name: userFormValues.first_name.trim(),
            last_name: userFormValues.last_name.trim(),
            email: userFormValues.email.trim(),
            password: userFormValues.password.trim(),
        };
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
    useEffect(() => {
        userFormSchema.isValid(userFormValues)
        .then(valid => setDisabled(!valid))
      }, [userFormValues]);

//LOGIN FORM
    // Submit existing user information check against information in API
    // Login form errors and validation


// UseEffect hook and rendering
useEffect(() => {
    getUsers()
  }, []);

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/login' component={Login}>
                    <Login/>
                </Route>
                <Route path='signup' component={Signup}>
                    <Signup
                    values={userFormValues}
                    submit={submitUserForm}
                    update={updateUserForm}
                    errors={userFormErrors}
                    disabled={disabled}/>
                </Route>
            </Switch>
        </div>
    )
};