/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo_heitorflix.png';
import './Menu.css';    
import Button from '../Button';

//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/"> 
                <img className="Logo" src={Logo} alt="heitorflix logo" />
            </Link>
            <Button >
               <a href="https://editor.p5js.org/BMrnice/full/ic2EZ7EHh" target="_blank"> 
                Jogo do Heitor
               </a>
            </Button>
        </nav>
    );
}


export default Menu;