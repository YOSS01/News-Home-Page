import React from 'react';

// Components
import Category from './Category';

// Pictures
import imageRetroPcs from '../../assets/images/image-retro-pcs.jpg';
import imageTopLaptops from '../../assets/images/image-top-laptops.jpg';
import imageGamingGrowth from '../../assets/images/image-gaming-growth.jpg';


function Categories() {
  const categories = [
    {index: '01', title: 'Reviving Retro PCs', content: 'What happens when old PCs are given modern upgrades?', pic: imageRetroPcs, navigation: '/news-home-page'},
    {index: '02', title: 'Top 10 Laptops of 2022', content: 'Our best picks for various needs and budgets.', pic: imageTopLaptops, navigation: '/news-home-page'},
    {index: '03', title: 'The Growth of Gaming', content: 'How the pandemic has sparked fresh opportunities.', pic: imageGamingGrowth, navigation: '/news-home-page'},
  ]

  return (
    <div className='lg:h-[20%] w-full flex lg:flex-row flex-col justify-between gap-5 lg:gap-0 py-5 lg:py-0'>
        {
          categories.map((item, key) => {
            return <Category key={key} index={item.index} title={item.title} content={item.content} pic={item.pic} navigator={item.navigation} />
          })
        }
    </div>
  )
}
export default Categories;