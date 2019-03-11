import React from 'react'

import Form from '../components/form';
import contactStyles from './pageStyles/contact.module.scss';

const ContactPage = () => (
  <div className={contactStyles.background}>
    <div className={contactStyles.container}>
      <h1 className={contactStyles.title}>Contact</h1>
      <div className={contactStyles.formContainer}>
        <Form />
      </div>
    </div>
  </div>

);

export default ContactPage