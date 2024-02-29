import React, { useState } from 'react';
import classes from './CountPage.module.css';


const CountPage = () => {

    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className={classes.wrapper}>
            <p>Count: {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>


        </div>
    );
};

export default CountPage;