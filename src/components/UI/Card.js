import React from 'react';
import styelsss from './Card.module.css';
const Card = (props) => {
  return(

    <div className={`${styelsss.card} ${props.className}`}>{props.children}</div>

  );
}

export default Card;
