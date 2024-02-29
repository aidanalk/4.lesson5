import React from 'react';
import classes from './Modal.module.css';
import Input from '../input/Input';
import { Button } from '../button/Button';


const Modal = ({children, handleShow}) => {
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <button onClick={handleShow}>закрыть</button>
                {children}
            </div>
        </>
    );
};

export default Modal;