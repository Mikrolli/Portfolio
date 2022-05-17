import React from 'react';
import './portfolio.css';
import { PortfolioList } from '../../mocks/PortfolioList';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Лучше сделать скучную вещь со стилем, чем опасную без него.</h5>
      <h2>Работы</h2>

      <div className='container portfolio__container'>
        {
          PortfolioList.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn btn-green' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
};

export default Portfolio;