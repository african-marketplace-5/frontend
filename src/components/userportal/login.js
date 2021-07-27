import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
height: 40.5vh;
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
input, select {
    margin-left: 1%;
}
`
const initialLoginFormValues = {
    username: '',
    password: '',
};

export default function Login(props) {
    //use userLogin function to change global user id state
    const { userLogin } = props;

    const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues);
    
    const updateLoginForm = (inputName, inputValue) => {
        setLoginFormValues({ ...loginFormValues, [inputName]: inputValue});
    };
    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        updateLoginForm(name, valueToUse);
    };

    //placeholder for authorization
    const onSubmit = evt => {
        evt.preventDefault();
        console.log(loginFormValues);
    };
    return (
        <>
            <StyledLogin>
                <form className='form-container' onSubmit={onSubmit}>
                    <h2>Login:</h2>
                    <div className='form-inputs'>
                        <label htmlFor='username'>First name: 
                            <input 
                            id='username'
                            type='text'
                            name='username'
                            onChange={onChange}
                            value={loginFormValues.username}/>
                        </label>
                        <label htmlFor='password'> Password: 
                            <input 
                            id='password'
                            type='password'
                            name='password'
                            onChange={onChange}
                            value={loginFormValues.password}/>
                        </label>
                    </div>
                    <div className='submit'>
                    <button>Submit</button>
                    </div>
                </form>  
            </StyledLogin>
        </>
    );
};