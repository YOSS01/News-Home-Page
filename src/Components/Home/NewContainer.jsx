import React from 'react';

// Components
import New from './New';

function NewContainer() {
  const News = [
    {title: 'Hydrogen VS Electric Cars', content: 'Will hydrogen-fueled cars ever catch up to EVs?', navigation: '/news-home-page'},
    {title: 'The Downside of AI Artistry', content: 'What are the possible adverse effects of on-demand AI image generation?', navigation: '/news-home-page'},
    {title: 'Is VC Funding Drying Up?', content: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.', navigation: '/news-home-page'},
  ]

  return (
    <div className='lg:h-full lg:w-[35%] w-full flex flex-col lg:px-[2%] px-[4%] lg:py-[2%] py-[4%] gap-5 lg:gap-0' style={{background: 'hsl(240, 100%, 5%)'}}>
      <div className='h-[15%] flex'>
        <span className='font-extrabold text-3xl' style={{color: 'hsl(35, 77%, 62%)'}}>New</span>
      </div>
      <div className='h-[90%] w-full flex flex-col justify-evenly items-center lg:gap-5 gap-8'>
        {/* {
          News.map((item, key) => {
            return (
              <div className='w-full flex flex-col items-center'>
                <New key={key} title={item.title} content={item.content} navigator={item.navigation} />
                {key !== News.length - 1 && <div className='w-[70%] border-t-[.5px] border-solid border-slate-500'></div>}
              </div>
            )
          })
        } */}
        <New title={News[0].title} content={News[0].content} navigator={News[0].navigation} />
        <div className='w-[70%] border-t-[.5px] border-solid border-slate-500'></div>
        <New title={News[1].title} content={News[1].content} navigator={News[1].navigation} />
        <div className='w-[70%] border-t-[.5px] border-solid border-slate-500'></div>
        <New title={News[2].title} content={News[2].content} navigator={News[2].navigation} />
      </div>
    </div>
  )
}
export default NewContainer;