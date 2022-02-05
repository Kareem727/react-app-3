import React from 'react';
import Card from '../UI/Card';
import stylesss from './UserList.module.css'

const  UsersList = (props) => {
  return(
      <Card className={stylesss.userss}>
<ul>
    {props.users.map((user) => (
        <li key={user.id}
        id={user.id}>
            ({user.name}) ({user.age} years old);
        </li>
    ))}
    
</ul>
      </Card>
  );
};

export default UsersList;
