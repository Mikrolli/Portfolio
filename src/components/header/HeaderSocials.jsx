import React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { SiVk } from 'react-icons/si';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://vk.com/id617786182" target="_blank"><SiVk /></a>
      <a href="https://github.com/Mikrolli" target="_blank"><BsGithub /></a>
      <a href="https://www.instagram.com/mikrolli__flex/?hl=ru" target="_blank"><GrInstagram /></a>
    </div>
  )
};

export default HeaderSocials;