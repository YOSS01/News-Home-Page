import React from 'react';
import {Link} from 'react-router-dom';

function New({title, content, navigator}) {
  const changeColor = ({target}) => {
    target.style.color = 'hsl(35, 77%, 62%)';
  }

  const resetColor = ({target}) => {
    target.style.color = 'hsl(36, 100%, 99%)';
  }

  return (
    <div className='w-full flex flex-col gap-2'>
        <div>
            <Link onMouseOver={changeColor} onMouseOut={resetColor} className='font-extrabold duration-300' style={{color: 'hsl(36, 100%, 99%)'}} to={navigator} >{title}</Link>
        </div>
        <div>
            <p className='text-sm' style={{color: 'hsl(233, 8%, 79%)'}}>{content}</p>
        </div>
    </div>
  )
}
export default New;