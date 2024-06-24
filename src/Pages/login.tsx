import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({
    userName: '',
    password: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = () => {
    // Perform login logic here

    // On successful login, navigate to the feed page
    navigate('/');
  };

  const handleSignUp = () => {
    // Navigate to the register page
    navigate('/Register');
  };

  return (
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div className='w-[396px] mx-auto h-screen'>
      <div className='border my-8 pb-6 bg-white border-gray-300'>
        <h1 className='text-center text-3xl my-4 py-6'>Instaclone</h1>
        <form className='flex flex-col gap-4'>
          <input
            placeholder="Username or email"
            className='bg-gray-50 mx-8 py-1 placeholder:text-xs focus:outline-1 focus:outline-gray-400 placeholder:text-gray-400 border rounded-sm p-2'
            type='text'
            name='userName'
            onChange={changeHandler}
            required
          />
          <input
            placeholder="Password"
            className='bg-gray-50 mx-8 py-1 placeholder:text-xs focus:outline-1 focus:outline-gray-400 placeholder:text-gray-400 border rounded-sm p-2'
            type='password'
            name='password'
            onChange={changeHandler}
            required
          />
          <button
            className='bg-sky-500 text-center mx-8 text-sm py-1 rounded-sm text-white font-bold'
            type='button'
            onClick={handleLogin}
          >
            Log in
          </button>
        </form>
        <h1 className='text-center mt-12 text-xs text-indigo-900'>Forgot password?</h1>
      </div>
      <div className='border bg-white text-center py-4 border-gray-300'>
        <h1 className='text-sm'>
          Don't have an account?{' '}
          <span
            onClick={handleSignUp}
            className='text-sky-500 font-bold cursor-pointer'
          >
            Sign up
          </span>
        </h1>
      </div>
      <div>
        <h1 className='text-center py-4 text-sm'>Get the app.</h1>
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

export default Login;
