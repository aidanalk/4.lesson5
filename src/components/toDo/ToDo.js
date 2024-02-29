import React, { useState } from 'react';
import classes from './ToDo.module.css';
import { Button } from '../button/Button';
import Input from '../input/Input';


const ToDo = ({ task, handleDelete, handleDone, handleEdit, handleCurrentEdit, isEdit }) => {
    console.log(isEdit);
    const [ input, setInput ] = useState(task.title);
    console.log(input, 'inputinput');
    if (isEdit) {
        return <div>
            <input
                type="text"
                value={input}
                onChange={event => setInput(event.target.value)}/>
            <Button
                onClick={
                    () => {
                        handleEdit({
                            ...task, title: input
                        });
                        handleCurrentEdit(null)
                    }
                }
                text={'Save'}/>
            <Button text={'Cancel'} onClick={()=>handleCurrentEdit(null)}/>
        </div>;
    }
    return (
        <li className={`${classes.task} ${task.completed && classes.done}`}>
            <div className={classes.info}>
                <p>id: {task.id}</p>
                <p>title: {task.title}</p>
            </div>
            <div className={classes.btnBox}>
                <Button onClick={() => handleCurrentEdit(task.id)} text={'Edit'}/>
                <Button onClick={() => handleDone(task.id)} text={'Done'}/>
                <Button onClick={() => handleDelete(task.id)} text={'delete'}/>
            </div>
        </li>
    );
};

export default ToDo;
