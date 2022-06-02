import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';
import { BiMobileVibration } from 'react-icons/bi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6cyye3', 'template_50zuert', form.current, 'IZ_4mTvJcQ5npv15n');

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Время ответа - 30 минут.</h5>
      <h2>Контакты</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>Mikrolli@mail.ru</h5>
              <a href="mailto:mikrolli@mail.ru" target="_blank">Написать</a>
            </article>

            <article className='contact__option'>
              <BsTelegram className='contact__option-icon' />
              <h4>Telegram</h4>
              <h5>Mikrolli</h5>
              <a href="https://t.me/mikrolli51" target="_blank">Написать</a>
            </article>

            <article className='contact__option'>
              <BiMobileVibration className='contact__option-icon' />
              <h4>Telephone</h4>
              <h5>+7 (910) 973-96-46</h5>
              <a href="tel:+79109739646" target="_blank">Позвонить</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Ваше Фио' required />
            <input type='email' name='email' placeholder='Ваша почта' required />
            <textarea name="message" rows="7" placeholder='Введите ваше сообщение' required ></textarea>
            <button type='submit' className='btn btn-primary'>Отправить</button>
          </form>
        
      </div>
    </section>
  )
};

export default Contact;