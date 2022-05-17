import React from 'react';
import './header.css';
import CTA from './CTA';
import Avatar from '../../assets/avatar.jpg';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Всем привет, меня зовут</h5>
        <h1>Эдуард Экер</h1>
        <h5>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Avatar} alt="Это я" />
        </div>

        <a href="#contact" className='scroll__down'>И все же к делу</a>
      </div>
    </header>
  )
};

export default Header;