import React from 'react';
import classes from './Input.module.css';


const Input = ({placeholder, type='text', onChangeInput}, value) => {
    // const sum = (a,b=2000) => {
    //     return a+b
    // }
    //
    // console.log(sum(7, 3000));
    return (
        <input placeholder={placeholder}
               type={type}
               onChange={onChangeInput}
               className={classes.input}
        />
    );
};

export default Input;
