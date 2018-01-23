import * as React from 'react';
import './Header.css';
const pic = require('../../assets/images/pic.jpg');

interface HeaderProps {}

const header: React.SFC<HeaderProps> = props => {
  return (
    <div className="Header">
      <div className="Photo">
        <img src={pic} />
        <div className="name font-effect-emboss">
          <h1 style={{ textAlign: 'center' }}>Renato Pérez</h1>
        </div>
        <div className="title">
          <h2 style={{ textAlign: 'justify' }}>Web/Mobile Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default header;
