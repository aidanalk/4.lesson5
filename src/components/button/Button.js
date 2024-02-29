import React from 'react';
import classes from './Button.module.css';


export const Button = ({text, onClick}) => {
    return (
        <>
            <button onClick={onClick} className={classes.btn}>{text}</button>
        </>
    );
};

