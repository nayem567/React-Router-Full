import React from 'react'
import { useNavigate } from 'react-router'

const Contact = () => {

  const navigate = useNavigate();

  const handleGoToHome = () =>{
    navigate('/')
  }

  return (
    <div className='Contact'>
        <h2>Welcome to Contact Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum totam at alias possimus nulla distinctio obcaecati harum veritatis inventore?</p>
        <button onClick={handleGoToHome}>Go to Home</button>
    </div>
  )
}

export default Contact