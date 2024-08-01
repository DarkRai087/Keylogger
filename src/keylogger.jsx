import React, { useEffect, useState } from 'react';

 
import './App.css'; 

function Keylogger() {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKey(event.key);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
  <div className="container">
      <div className="key-box">
        <p>{key}</p>
      </div>
</div>
  );
}

export default Keylogger;
