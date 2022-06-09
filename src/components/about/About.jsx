import React from 'react';
import './about.css';
import ME from '../../assets/images/parachute.jpg';
import { MdOutlineParagliding } from 'react-icons/md';
import { GiCat } from 'react-icons/gi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';



const About = () => {
  return (
    <section id='about'>
      <h5>Я предпочитаю помнить все по-своему.</h5>
      <h2>Немного о себе</h2>

      <div className="container about__container">

      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="" />
        </div>
      </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineParagliding className='about__icon' />
              <h5>Прыгнул!</h5>
              <small>Да, это было незабываемо.</small>
            </article>

            <article className='about__card'>
              <GiCat className='about__icon' />
              <h5>Хели</h5>
              <small>Это моя дочка(кошка).</small>
            </article>

            <article className='about__card'>
              <HiOutlineDesktopComputer className='about__icon' />
              <h5>Опыт</h5>
              <small>1.5 года.</small>
            </article>
          </div>

          <p>
            Постараюсь кратко о себе рассказать:
            Массажист, программист, юрист, официант, бариста, кальянщик, барабанщик и в меру хороший.
            Да и чем я только не занимался, а сколько еще впереди.
            Вам покажется это не серьезным, но немного юмора всегда не помешает.
          </p>

          <a href="#contact" className='btn btn-primary'>Почта</a>
        </div>
      </div>
    </section>
  )
};

export default About;