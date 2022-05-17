import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>Тот, кто владеет знаниями — владеет миром.</h5>
      <h2>Что я могу</h2>

      <div className='container services__container'>
        <article className='services'>
          <div className="services__head">
            <h3>HTML/CSS</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Верстка</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Препроцессор Sass</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Grid/Flex</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Медиа-запросы</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className="services__head">
            <h3>JavaScript</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Работа с DOM</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Fetch Api</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Grid/Flex</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Медиа-запросы</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Медиа-запросы</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className="services__head">
            <h3>React</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Верстка</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Препроцессор Sass</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Grid/Flex</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Медиа-запросы</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
};

export default Services;