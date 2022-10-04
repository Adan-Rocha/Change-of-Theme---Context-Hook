import React from "react";
import { useTheme } from "../utilities/ThemeContext";

import {
  Link
} from "react-router-dom";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const changeTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className='h-screen bg-gray-200'>
      <div className='text-center w-full text-2xl '>
        React - Tailwind CSS - Theme Changer
      </div>
      <div className='flex text-center my-8'>
        <div className='mx-auto'>
          <button
            onClick={changeTheme}
            value='light'
            className='px-2 py-1 mr-1 rounded bg-white'>
            Light
          </button>

          <button
            onClick={changeTheme}
            value='dark'
            className='px-2 py-1 ml-1 rounded bg-black text-white'>
            Dark
          </button>

          <button
            onClick={changeTheme}
            value='moreOne'
            className='px-2 py-1 ml-1 rounded bg-black text-white'>
            moreOne
          </button>
          
          <Link to="/Page_02" className='ml-4 text-blue-500'>Page 02</Link>

        </div>
      </div>

      <div>
        <div className={`bg-${theme}-100 shadow sm:rounded-lg mx-48`}>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className={`text-${theme}-400 text-lg leading-6 font-medium`}>
              Box 01
            </h3>
            <div className='mt-5'>
              <div
                className={`bg-${theme}-300 shadow sm:rounded-lg rounded-md  px-6 py-5 sm:flex sm:items-start
                sm:justify-between`}>
                <div className='sm:flex sm:items-start'>
                  
                  <div className='mt-3 sm:mt-0 sm:ml-4'>
                    <div
                      className={`text-${theme}-400 text-sm leading-5 font-medium `}>
                      Text - 01
                    </div>
                    <div className='mt-1 text-sm leading-5 text-gray-600 sm:flex sm:items-center'>
                      <div>Text - 02</div>
                      <span
                        className='hidden sm:mx-2 sm:inline'
                        aria-hidden='true'>
                        &middot;
                      </span>
                      <div className='mt-1 sm:mt-0'>
                        The Focus is the change of theme
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0'>
                  <span className='inline-flex rounded-md shadow-sm'>
                    <button
                      type='button'
                      className={`bg-${theme}-500 text-${theme}-400 inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150`}>
                      Button
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
