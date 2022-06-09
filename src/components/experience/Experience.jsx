import React from 'react';
import './experience.css';
import { BsPatchCheck } from 'react-icons/bs';
import { GiDrum } from 'react-icons/gi';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { IoMdFitness } from 'react-icons/io';

const Experience = () => {
  return (
    <section id='experience'>
      <h5> Всегда делай то, чего не умеешь, чтобы этому научиться.</h5>
      <h2>Мои навыки</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-blue'>Отлично</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-blue'>Отлично</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-blue'>Уверенно</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-blue'>Обожаю</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__rest">
          <h3>Дополнительно но не по делу</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <GiDrum className='experience__details-icon' />
              <div>
              <h4>Музыка</h4>
              <small className='text-blue'>Барабаны</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandHoldingMedical className='experience__details-icon' />
              <div>
              <h4>Массаж</h4>
              <small className='text-blue'>Дипломированный специалист</small>
              </div>
            </article>
            <article className='experience__details'>
              <ImBooks className='experience__details-icon' />
              <div>
              <h4>Книги</h4>
              <small className='text-blue'>Каждый день</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoMdFitness className='experience__details-icon' />
              <div>
              <h4>Занимаюсь спортом</h4>
              <small className='text-blue'>Loft Fitnes</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Experience;