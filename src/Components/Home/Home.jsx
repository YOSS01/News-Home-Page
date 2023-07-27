import React from 'react';

// Components
import Hero from './Hero';
import BigTitle from './BigTitle';
import Content from './Content';
import Button from './Button';
import NewContainer from './NewContainer';
import Categories from './Categories';

function Home() {
  return (
    <div className='w-full lg:h-[80vh] h-screen flex flex-col gap-16'>
        <div className='lg:h-[70%] w-full flex lg:flex-row flex-col lg:flex-between gap-10 '>
            {/* Content */}
            <div className='lg:h-full lg:w-[65%] w-full flex flex-col gap-5'>
                <Hero />
                <div className='lg:h-[40%] w-full flex sm:flex-row flex-col justify-between gap-5'>
                    <BigTitle />
                    <div className='sm:w-[45%] w-full h-full flex flex-col justify-between items-start gap-5'>
                        <Content />
                        <Button />
                    </div>
                </div>
            </div>
            {/* New */}
            <NewContainer />
        </div>
        <Categories />
    </div>
  )
}
export default Home;