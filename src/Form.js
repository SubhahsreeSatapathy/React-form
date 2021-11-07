import React, { useState } from 'react';
import './Form.css';
import FormSignin from './FormSignin';
import FormSignup from './FormSignup';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://miro.medium.com/max/1400/1*LdhV-KfejeH1OT4Pzfn7ag.png' alt='' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSignin />
        )}
      </div>
    </>
  );
};

export default Form;