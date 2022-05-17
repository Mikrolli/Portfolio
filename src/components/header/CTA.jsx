import React from 'react';
import CV from '../../assets/resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Скачать резюме</a>
      <a href="#contact" className='btn btn-primary'>Сразу к делу</a>
    </div>
  )
};

export default CTA;