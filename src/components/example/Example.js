import React from 'react';
import classes from './Example.module.css';


const Example = ({children}) => {
    return (
        <div className={classes.textGreen}>
            {children}
            children

        </div>
    );
};

export default Example;