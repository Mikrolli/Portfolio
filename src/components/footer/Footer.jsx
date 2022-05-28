import React from 'react';
import './footer.css';
import { SiVk } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mikrolli</a>

      <ul className='permalinks'>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#about">Обо мне</a>
        </li>
        <li>
          <a href="#experience">Навыки</a>
        </li>
        <li>
          <a href="#services">Что я умею</a>
        </li>
        <li>
          <a href="#portfolio">Работы</a>
        </li>
        <li>
          <a href="#contact">Контакты</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://vk.com/id617786182" target="_blank"><SiVk /></a>
        <a href="https://github.com/Mikrolli" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/mikrolli__flex/?hl=ru" target="_blank"><GrInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Mikrolli</small>
      </div>
    </footer>
  )
};

export default Footer;