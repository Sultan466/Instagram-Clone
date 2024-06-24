import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register: React.FC = () => {
  const navigate = useNavigate();

  const [registrationData, setRegistrationData] = useState({
    email: '',
    fullName: '',
    userName: '',
    password: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const handleSignUp = () => {
    // Perform registration logic here
    console.log(registrationData);

    // On successful registration, navigate to the login page
    navigate('/login');
  };

  return (
    <div className='mx-auto w-[396px] h-screen'>
      <div className='border my-8 pb-6 bg-white border-gray-300'>
        <h1 className='text-center text-3xl my-4 py-6'>Instaclone</h1>
        <h2 className='my-4 pb-8 mx-8 text-center font-bold text-gray-400 text-lg'>
          Sign up to see photos and videos from your friends.
        </h2>
        <div>
          <form className='border border-white'>
            <input
              type='text'
              className='bg-gray-50 mx-8 py-1 placeholder:text-xs focus:outline-1 focus:outline-gray-400 placeholder:text-gray-400 border rounded-sm p-2'
              placeholder='Email Address'
              name='email'
              onChange={changeHandler}
              required
            />
            <input
              type='text'
              className='bg-gray-50 mx-8 py-1 placeholder:text-xs focus:outline-1 focus:outline-gray-400 placeholder:text-gray-400 border rounded-sm p-2'
              placeholder='Full Name'
              name='fullName'
              onChange={changeHandler}
              required
            />
            <input
              type='text'
              className='bg-gray-50 mx-8 py-1 placeholder:text-xs focus:outline-1 focus:outline-gray-400 placeholder:text-gray-400 border rounded-sm p-2'
              placeholder='Username'
              name='userName'
              onChange={changeHandler}
              required
            />
            <input
              type='password'
              className='bg-gray-50 mx-8 py-1 placeholder:text-xs focus:outline-1 focus:outline-gray-400 placeholder:text-gray-400 border rounded-sm p-2'
              placeholder='Password'
              name='password'
              onChange={changeHandler}
              required
            />
            <button
              type='button'
              className='bg-sky-500 text-center mx-8 text-sm py-1 rounded-sm text-white font-bold'
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className='border bg-white text-center py-4 border-gray-300'>
        <h1 className='text-sm'>
          Have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className='text-sky-500 font-bold cursor-pointer'
          >
            Log in
          </span>
        </h1>
      </div>
      <div>
        <h1 className='text-center pt-4 text-sm'>Get the app.</h1>
        <div className='flex scale-50 gap-6 justify-evenly'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png'
            alt='Download on the App Store'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png'
            alt='Get it on Google Play'
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
