import React, { useState } from 'react';
import classes from './Users.module.css';


const Users = ({ users }) => {

    const [user, setUser] = useState({})
    console.log(user, '***************************');
    const getUser = async (id) => {
        const data = await fetch(`https://jsonplaceholder.org/users/${id}`)
        const user = await (data.json())
        setUser(user)
    }
    return (
        <ul className={classes.users}>
            {
                users.map(user =>
                    <li key={user.id} className={classes.user}>
                        <p>Username: {user.login.username}</p>
                        <p>birthDate: {user.birthDate}</p>
                        <button onClick={()=>getUser(user.id)}>подробнее</button>
                    </li>)
            }
        </ul>
    );
};

export default Users;