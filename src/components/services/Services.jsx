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
            <h3>Общее</h3>
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
              <p>HTML/CSS</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Git</p>
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
              <p>ES6</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Promise</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Async/await</p>
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
              <p>Основные концепции</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Постраничная навигация</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Сортировка/поиск</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>React Hooks</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
};

export default Services;