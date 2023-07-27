import React from 'react';

function Button() {
  const changeBackgroundColor = ({target}) => {
    target.style.background = 'hsl(240, 100%, 5%)';
  }

  const resetBackgroundColor = ({target}) => {
    target.style.background = 'hsl(5, 85%, 63%)';
  }
  return (
    <button
      onMouseOver={changeBackgroundColor} onMouseOut={resetBackgroundColor}
     className='w-[50%] py-3 flex justify-center items-center uppercase font-bold text-sm tracking-[.25em] duration-300' style={{background: 'hsl(5, 85%, 63%)', color: 'hsl(36, 100%, 99%)'}}
     >
      Read More
    </button>
  )
}
export default Button;