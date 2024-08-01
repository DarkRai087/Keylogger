import React from 'react';
import './header.css'; 

function Header() {
  const redirectToLink = () => {
    window.location.href = 'https://github.com/DarkRai087';
  };

  return (
    <div className="header">
      <div className="logo">KeyLogger With React js</div>
      <button className="pro-button" onClick={redirectToLink}>
        <i className="fab fa-github"></i> GitHub
      </button>
    </div>
  );
}

export default Header;

