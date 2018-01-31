import * as React from 'react';
import './Contact.css';

export interface ContactProps {}

export function Contact(props: ContactProps = {}) {
  return (
    <div>
      <p style={{ textAlign: 'justify' }}>
        Virtually all my most recent work with current technologies has been for 
        <strong> Enterprise web/mobile applications</strong>, which unfortunately cannot be shared
        with the public. But I still have my <a href="https://github.com/renato1010">Github </a>
        account where I try/prototype/play with technologies that I find interesting. If you have
        the time, please feel free to check it, and if you want for me to code around any particular
        concept let’s chat about it.
        <strong>I’ll be more than happy to craft a prototype to show my code skills</strong>, and
        discuss in depth the decisions I make; Of course, all this for free.
      </p>
      <h4>You think I could help on your project; I'm flattered! let talk</h4>
      <div className="icon-grid">
        <div className="icon-item">
          <div className="item-title">Web</div>
          <div className="item-logo">
            <a href="#">
              <img src="./assets/images/contact/web.svg" alt="web" />
            </a>
          </div>
        </div>
        <div className="icon-item">
          <div className="item-title">Github</div>
          <div className="item-logo">
            <a href="https://github.com/renato1010">
              <img src="./assets/images/contact/github.svg" alt="web" />
            </a>
          </div>
        </div>
        <div className="icon-item">
          <div className="item-title">Twitter</div>
          <div className="item-logo">
            <a href="https://twitter.com/renatchenko">
              <img src="./assets/images/contact/twitter.svg" alt="web" />
            </a>
          </div>
        </div>
        <div className="icon-item">
          <div className="item-title">Email</div>
          <div className="item-logo">
            <a href="mailto:renatoperezc@gmail.com?subject=About your resume">
              <img src="./assets/images/contact/gmail-icon.svg" alt="web" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
