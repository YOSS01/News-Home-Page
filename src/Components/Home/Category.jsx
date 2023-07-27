import React from 'react';
import {Link} from 'react-router-dom';

function Category({index, title, content, pic, navigator}) {
    const changeColor = ({target}) => {
        target.style.color = 'hsl(5, 85%, 63%)';
    }
    
    const resetColor = ({target}) => {
        target.style.color = 'hsl(240, 100%, 5%)';
    }
  return (
    <div className='lg:h-full h-[15vh] sm:h-[30vh] lg:w-[33%] w-full flex justify-start gap-5'>
        <div className='h-full w-[35%]'>
            <img className='max-h-full min-h-full min-w-full max-w-full object-contain' src={pic} alt="category pic" />
        </div>
        <div className='h-full flex flex-col justify-between'>
            <div>
                <span className='sm:text-7xl lg:text-3xl font-extrabold' style={{color: 'hsl(233, 8%, 79%)'}}>{index}</span>
            </div>
            <div>
                <Link onMouseOver={changeColor} onMouseOut={resetColor} className='font-extrabold sm:text-3xl lg:text-base duration-300' to={navigator} style={{color: 'hsl(240, 100%, 5%)'}}>{title}</Link>
            </div>
            <div>
                <p className='text-xs sm:text-base lg:text-sm' style={{color: 'hsl(236, 13%, 42%)'}}>{content}</p>
            </div>
        </div>
    </div>
  )
}
export default Category;