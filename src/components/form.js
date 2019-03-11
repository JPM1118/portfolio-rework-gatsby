import React from 'react';

import formStyle from './componentStyles/form.module.scss';

const Form = () => (
  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
    <div className={formStyle.name}>
      <label htmlFor="name">Name
        <input type="text" name="name" id="name" required />
      </label>
    </div>
    <div className={formStyle.email}>
      <label htmlFor="email">Email
        <input type="email" name="email" id="email" required />
      </label>
    </div>
    <div className={formStyle.message}>
      <label htmlFor="message">Message
        <textarea name="message" id="message" rows="6" required />
      </label>
    </div>
    <button type="submit" id="submit" className={formStyle.button}>Submit</button>
  </form>
)

export default Form;
