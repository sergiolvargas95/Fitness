import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../images/NotFound.png';
import './styles/NotFound.css';

function NotFound() {
    return (
        <React.Fragment>
            <div className="NotFound__container">
                <img src={NotFoundImg} alt="404 Not Found"/>
                <Link className="NotFound__link"to="/exercise">Go Back!</Link>
            </div>
        </React.Fragment>
    )
}

export default NotFound;