import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title}) => {
    return (
      <Link to="https://paystack.com/pay/5vkhiszv69">
        <button className="btn">{title}</button>
      </Link>
    );
}

export default Button
