import React from "react";
import stylesss from './Button.module.css';
const Button =(props) =>{
    return(
    
        <button className={stylesss.button}
        type={props.type || 'button'}
        onClick={props.onClick}>{props.children}</button>
    
        );
}

export default Button;