import React from 'react'
import logo from '../images/logo2.png'
const SecondScreen = () => {
    return (
      <div className="secondscreen">
       <div className='secondscreen__image'>
        <img src={logo} alt="Logo" />
        </div>
        <div className="secondscreen__background"></div>
      </div>
    );
}

export default SecondScreen
