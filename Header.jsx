import React from 'react';
import './head.css';

const Header = () => {
  return (
    <>
      <header>
        <h1>Welcome to Mathura Visit</h1>
      </header>

      <div className="image-container">
        <img src="/images/Feature.jpg" alt="Mathura" />
        <h1>Welcome to Mathura Visit</h1>
      </div>

      <h2>To visit Mathura's top palaces</h2>

      <div className="mid">
        <img className="midd" src="/images/math.jpg" alt="Mathura" />
        <p>Golden temple is a magnificent sight and one of the top attractions in Mathura. Its architecture and history make it a must-visit.</p>
      </div>
    </>
  );
};

export default Header;
