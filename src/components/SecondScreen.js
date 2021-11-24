import React from 'react'
import logo from '../images/logo2.png'
import people from "../images/background3.png";
const SecondScreen = () => {
    return (
      <div className="secondscreen">

          <img className='secondscreen__image' src={logo} alt="Logo" />
          <img className="secondscreen__background" src={people} alt="Logo" />

      </div>
    );
}

export default SecondScreen
