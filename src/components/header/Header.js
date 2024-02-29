import React from 'react';
import classes from './Header.module.css';


const Header = ({navbar}) => {
    console.log(navbar, 'navbar');
    return (
        <>
            <ul className={classes.list}>
                {
                    navbar.map((item, index) => <li key={index}>
                        {item}
                    </li>)
                }
            </ul>
            <div className={classes.box}>

            </div>
        </>

    );
};

export default Header;