import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useHistory } from "react-router-dom";

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
.error {
    color:red;
    height:0vh;
    overflow:hidden;
}
.error.show{
    height:auto;
    overflow: visible;
}

`
const initialLoginFormValues = {
    username: '',
    password: '',
};

export default function Login(props) {
    const { push } = useHistory();
    //use userLogin function to change global user id state
    const { userLogin, login} = props; // eslint-disable-line

    const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues);
    
    const handleChange = evt => {
      const { name, value } = evt.target;

      setLoginFormValues({ ...loginFormValues, [name]:value })
    }

    //placeholder for authorization
    const handleSubmit = evt => {
        evt.preventDefault();

        axios
          .post('https://african-marketplace-5.herokuapp.com/api/auth/login', loginFormValues)
          .then(res => {
            localStorage.setItem('token', res.data.token)
            login()
            push('/account')
            
          })
          .catch(err => {
            console.log(err)
          })
    };

    return (
        <>
            <StyledLogin>
                <form className='form-container' onSubmit={handleSubmit}>

                    <h2>Login:</h2>

                    <div className='form-inputs'>
                        <label htmlFor='username'>First name: 
                            <input 
                              id='username'
                              type='text'
                              name='username'
                              onChange={handleChange}
                              value={loginFormValues.username}
                            />
                        </label>

                        <label htmlFor='password'> Password: 
                            <input 
                              id='password'
                              type='password'
                              name='password'
                              onChange={handleChange}
                              value={loginFormValues.password}
                            />
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