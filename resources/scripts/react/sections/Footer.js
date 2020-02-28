import React from 'react';
import { Container } from 'react-bootstrap';
import Copyable from '../components/Copyable';

const Footer = () => (
    <footer>
      <div className="fade-bg">
        <Container>
          <h2>Contactez moi :</h2>
          <Copyable>
            <p>peret.etienne@gmail.com</p>
          </Copyable>
        </Container>
      </div>
      <Container className="social-links">
        <a className="github" href="https://github.com/Arcades2">Github</a>
        <a className="linkedin" href="https://www.linkedin.com/in/etienne-peret-8bb5a960/">Linkedin</a>
      </Container>
    </footer>
);

export default Footer;
