import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/LogoPiti.gif'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import SendWebsite from './SendWebsite';

export const Footer = () => {
  const [showWebsiteForm, setShowWebsiteForm] = useState(false);
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='cont'>
          <div sm={6} className='logoz'>
            <img
              src={logo}
              alt='logo'
              onClick={() => setShowWebsiteForm(!showWebsiteForm)}
            />
          </div>
          <div md={10}>
            <p> © Xavier Yribarren</p>
          </div>
          <div sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/xavier-yribarren-9a8777173/'>
                <img src={navIcon1} />
              </a>
            </div>
          </div>
        </div>
        <div>{showWebsiteForm ? <SendWebsite /> : ''}</div>
      </div>
    </footer>
  );
};
