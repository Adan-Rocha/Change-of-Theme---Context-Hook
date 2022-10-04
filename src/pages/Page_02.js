import React from "react";
import { useTheme } from "../utilities/ThemeContext";

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className='h-screen bg-gray-200'>
      <div className='text-center w-full text-2xl '>
        React - Tailwind CSS - Theme Changer
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
                        Color is same on different page                   
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
