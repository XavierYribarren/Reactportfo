import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function SendWebsite() {
  const [fromContact, setFromContact] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const form = useRef();

  const updateContact = ({ target: { value } }) => {
    setFromContact(value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    emailjs
      .sendForm(
        'service_f9d38zo',
        'contact_from_website',
        form.current,
        '52W5msASOb73Myu0o'
      )
      .then(
        (result) => {
          setButtonText('Sent');
          setTimeout(() => {
            setButtonText('Send');
          }, 2000);
          setFormDetails(formInitialDetails);
        },
        (error) => {
          setButtonText('Oups');
        }
      );
  };
  return (
    <form onSubmit={sendMail} ref={form}>
      <input
        type='email'
        required
        name='from_email'
        id='contact'
        value={fromContact}
        onChange={(e) => updateContact(e)}
      />
      <input type='submit' value={buttonText} />
    </form>
  );
}

export default SendWebsite;
