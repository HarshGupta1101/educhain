import React from 'react';
import '../css/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const footerQuickLinks = [
  {
    display: 'Home',
    url: '#',
  },
  {
    display: 'About Us',
    url: '/about',
  },
  {
    display: 'Courses',
    url: '/courses',
  },
];

const footerInfoLinks = [
  {
    display: 'Privacy Policy',
    url: '#',
  },
  {
    display: 'Purchases Guide',
    url: '#',
  },
  {
    display: 'Terms of Service',
    url: '#',
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='6' className='mb-4'>
            <h2 className='d-flex align-items-center gap-1'>EduChain</h2>

            <div className='follows'>
              <p className='mb-0'>Follow us on social media</p>
              <span>
                {' '}
                <a href='facebook.com'>
                  <i className='ri-facebook-line'></i>
                </a>
              </span>

              <span>
                {' '}
                <a href='facebook.com'>
                  <i className='ri-instagram-line'></i>
                </a>
              </span>

              <span>
                {' '}
                <a href='facebook.com'>
                  <i className='ri-linkedin-line'></i>
                </a>
              </span>

              <span>
                {' '}
                <a href='facebook.com'>
                  <i className='ri-twitter-line'></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg='3' md='6' className='mb-4'>
            <h6 className='footsec'>Explore</h6>
            <ListGroup className='link__list'>
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className='border-0 ps-0 link__item'>
                  {' '}
                  <Link to = {item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg='3' md='6' className='mb-4'>
            <h6 className='footsec'>Information</h6>
            <ListGroup className='link__list'>
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className='border-0 ps-0 link__item'>
                  {' '}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg='3' md='6'>
            <h6 className='footsec'>Get In Touch</h6>
            <p>support@educhain.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
