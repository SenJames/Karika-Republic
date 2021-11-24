import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title}) => {
    return (
      <Link to={"//paystack.com/pay/5vkhiszv69"} target="_blank" >
        <button type="button" className="btn">{title}</button>
      </Link>
    );
}

export default Button
