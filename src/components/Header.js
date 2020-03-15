import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header() {
  return (
    <header>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}
      <br />
      <a href="https://blog.gradinita-veseliei.ro/">Blog</a> - {' '} 
      <Scroll type="id" element="contact">
        <a href="#contact">Contact</a>
      </Scroll>

      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="first">
            <a href="#first" className="arrow">
              <span className="label">Next</span>
            </a>
          </Scroll>
        </li>
      </ul>
    </header>
  );
}
