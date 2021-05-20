import React from 'react';
import ButtonAdd from '../images/add.png';
import './styles/Button.css';
import { Link } from 'react-router-dom';

class Button extends React.Component{
    render (){
        return (
            <div className="Button__container">
                <Link to="/exercise/new">
                    <img src={ButtonAdd} alt="button" />
                </Link>
            </div>
        )
    }
}

export default Button;