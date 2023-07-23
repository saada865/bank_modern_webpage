import React from 'react'

const Button = ({styles}) => (
  
    <button type="button" className={`py-4 py-6 bg-blue-gradient
    font-poppins font-medium test-[18px] text-primary outline-none 
    ${styles} rounded-[10px]`}>
       Get Started
    </button>
  
)

export default Button