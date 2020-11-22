import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo_heitorflix.png';

function Footer() {
  return (
    <FooterBase>
        <img clasName="Logo" src={Logo} alt="Logo HeitorFlix" />
      
      <p>
        Orgulhosamente criado por <a href="/"> Magnilson Moreira</a> 
        {' '}
       
      </p>
      
    </FooterBase>
  );
}

export default Footer;
