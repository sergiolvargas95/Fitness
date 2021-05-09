import React from 'react';
import ButtonAdd from '../images/add.png';
import './styles/Button.css';

class Button extends React.Component{
    render (){
        return (
            <div className="Button__container">
                <a href="/">
                    <img src={ButtonAdd} alt="button" />
                </a>
            </div>
        )
    }
}

export default Button;