import React from 'react';
import './header.css';
import CTA from './CTA';
/* import Avatar from '../../assets/avatar.jpg'; */
import HeaderSocials from './HeaderSocials';
import SoundBar from '../soundBar/SoundBar';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Всем привет, меня зовут</h5>
        <h1>Эдуард Экер</h1>
        <h5>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <SoundBar />
        
         {/* <div className='me'>
          <img src={Avatar} alt="Это я" />
        </div>  */}

        <a href="#contact" className='scroll__down'>Контакты</a>
      </div>
    </header>
  )
};

export default Header;