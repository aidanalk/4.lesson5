import React, { useState } from 'react';
import ToDo from '../toDo/ToDo';
import classes from './ToDoList.module.css';


const ToDoList = ({tasks, handleDelete, handleDone, handleEdit}) => {
    const [currentEdit, setCurrentEdit] = useState()

    return (
        <ul className={classes.list}>
            {tasks.map(todo=>
              <ToDo
                key={todo.id}
                task={todo}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
                handleCurrentEdit={setCurrentEdit}
                isEdit={ currentEdit === todo.id}
              /> )}
        </ul>
    );
};

export default ToDoList;
