import React from 'react';

import formStyle from './componentStyles/form.module.scss';

const Form = () => (
  <form method="post" action="#">
    <div className={formStyle.name}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div className={formStyle.email}>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className={formStyle.message}>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="6"></textarea>
    </div>
    <button type="submit" id="submit" className={formStyle.button}>Submit</button>
  </form>
)

export default Form;
