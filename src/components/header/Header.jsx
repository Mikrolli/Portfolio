import React from 'react';
import './header.css';
import CTA from './CTA';
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
        
        <a href="#contact" className='scroll__down'>Контакты</a>
      </div>
    </header>
  )
};

export default Header;
