import React from 'react';
import classes from './InputShow.module.css';


const InputShow = ({input}) => {

    const color = () => {
        if (input.length > 5) {
            return 'green'
        } else return 'red'
    }

    console.log(color());

    const person = {
        name: "Bakyt",
        age: 18
    }
    console.log(person.name, '===' , person['name']);

    return (
        <div className={classes[color()]}>
            {input}
        </div>
    );
};

export default InputShow;