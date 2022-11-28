import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import SendWebsite from './SendWebsite';

export const Footer = () => {
  const [showWebsiteForm, setShowWebsiteForm] = useState(false);
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col sm={6}>
            <img
              src={logo}
              alt='logo'
              onClick={() => setShowWebsiteForm(!showWebsiteForm)}
            />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href=''>
                <img src={navIcon1} />
              </a>
              <a href=''>
                <img src={navIcon2} />
              </a>
              <a href=''>
                <img src={navIcon3} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>{showWebsiteForm ? <SendWebsite /> : ''}</Row>
      </Container>
    </footer>
  );
};
