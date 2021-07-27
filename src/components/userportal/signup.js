import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Signup(props) {
    const {values, update, submit, disabled, errors} = props;
    
    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    };
    
    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h2>Create an account:</h2>
            <div className='form-inputs'>
                <label htmlFor='first_name'>First name:
                    <input 
                    id='first_name'
                    type='text'
                    name='first_name'
                    onChange={onChange}
                    value={values.first_name}
                    />
                </label>
                <label htmlFor='last_name'>Last name:
                    <input 
                    id='last_name'
                    type='text'
                    name='last_name'
                    onChange={onChange}
                    value={values.last_name}
                    />
                </label>
                <label htmlFor='email'> Email:
                    <input 
                    id='email'
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    />
                </label>
                <label htmlFor='password'> Password:
                    <input 
                    id='password'
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                    />
                </label>
                <label htmlFor='tos'> By checking here, I agree to African Marketplace's Terms of Service.
                        <input 
                        id='tos'
                        type='checkbox'
                        name='tos'
                        onChange={onChange}
                        checked={values.tos}
                        />
                </label>
            </div>
        </form>
    );
};