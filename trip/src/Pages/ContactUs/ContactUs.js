
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animationData.json';
import './contactus.scss'; 

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

const FormComponent = () => {
  return (
    <div className="form-container">
    <h2>فرم تماس با ما</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">نام:</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">ایمیل:</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">پیام:</label>
        <textarea id="message" required></textarea>
      </div>
      <button type="submit" className='button1'>ارسال</button>
    </form>
  </div>
  );
};

const ContactUs = () => {
  return (
    <div className="app-container">
      <FormComponent />
      <LottieAnimation />
    </div>
  );
};

export default ContactUs;
