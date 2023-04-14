import React from 'react';

function Header() {
  
  return (
    <header>
      <div className="header__logo">
      <img src={process.env.PUBLIC_URL + '/img/applogo.png'} alt="" />
      </div>
      <div className="header__title">
        <img className='resim' src='img/weather-logo.png'></img>
        <h1>Weather App</h1>
        
      </div>
    </header>
  );
}

export default Header;