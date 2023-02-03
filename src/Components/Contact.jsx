import { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import maillogo from '../assets/img/mailW.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    from_name: '',
    from_email: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    emailjs
      .sendForm(
        'service_f9d38zo',
        'template_ys4r9f8',
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
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={maillogo} className='mail-logo' alt='Contact me' />
          </Col>
          <Col md={6}>
            <h2>Hit Me Up!</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.from_name}
                    onChange={(e) => onFormUpdate('from_name', e.target.value)}
                    name='from_name'
                    placeholder='Your name'
                  />
                </Col>

                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    value={formDetails.from_email}
                    onChange={(e) => onFormUpdate('from_email', e.target.value)}
                    name='from_email'
                    placeholder='Your e-mail'
                  />
                </Col>

                <Col>
                  <textarea
                    row='6'
                    name='message'
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    placeholder='Your message...'
                  ></textarea>
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
