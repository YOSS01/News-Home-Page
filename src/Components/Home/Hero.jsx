import React from 'react';

// Components
import heroDesktop from '../../assets/images/image-web-3-desktop.jpg'
import heroMobile from '../../assets/images/image-web-3-mobile.jpg'

function Picture() {
  return (
    <div className='lg:h-[60%] w-full'>
        <img className='hidden sm:block max-h-full w-full object-fill' src={heroDesktop} alt="" />
        <img className='block sm:hidden object-contain' src={heroMobile} alt="" />
    </div>
  )
}
export default Picture;