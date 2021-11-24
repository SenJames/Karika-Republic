import React from 'react'
import logo from '../images/logo2.png'
import people from "../images/background3.png";
const SecondScreen = () => {
    return (
      <div className="secondscreen">
       {/* <div className='secondscreen__image'> */}
          <img className='secondscreen__image' src={logo} alt="Logo" />
        {/* </div> */}
        {/* <div className="secondscreen__background"> */}
          <img className="secondscreen__background" src={people} alt="Logo" />
        {/* </div> */}
      </div>
    );
}

export default SecondScreen
