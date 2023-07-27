import React, { useState } from 'react';
import {Link} from 'react-router-dom';

// Components
import Logo from './Logo';

// Pictures
import menuButton from '../../assets/images/icon-menu.svg';
import closeMenuButton from '../../assets/images/icon-menu-close.svg';

function NavBar() {
    const [menu, setMenu] = useState(false);

    const links = [
        {title: 'Home', navigation: '/news-home-page'},
        {title: 'New', navigation: '/news-home-page'},
        {title: 'Popular', navigation: '/news-home-page'},
        {title: 'Trending', navigation: '/news-home-page'},
        {title: 'Categories', navigation: '/news-home-page'},
    ];

    const changeColor = ({target}) => {
        target.style.color = 'hsl(5, 85%, 63%)';
    }
    
    const resetColor = ({target}) => {
        target.style.color = 'hsl(236, 13%, 42%)';
    }
  return (
    <div className='w-full flex justify-between'>
        <Logo />
        <ul className='sm:flex hidden items-center gap-10 text-sm'>
            {
                links.map((item, key)=>{
                    return (
                        <li key={key}><Link onMouseOver={changeColor} onMouseOut={resetColor} className='duration-300' style={{color: 'hsl(236, 13%, 42%)'}} to={item.navigation}>{item.title}</Link></li>
                    )
                })
            }
        </ul>
        <button onClick={()=>setMenu(true)} className='block sm:hidden'><img src={menuButton} alt="icon-menu" /></button>

        {
            menu && (
                <div className='fixed left-0 top-0 w-full h-full bg-black/60 flex justify-end'>
                    <div className='w-[70%] h-full bg-white flex flex-col gap-16'>
                        <div className='h-[10vh] flex items-center justify-end px-[5%]'>
                            <button onClick={()=>setMenu(false)}><img src={closeMenuButton} alt="icon-close-menu" /></button>
                        </div>
                        <ul className='w-full flex flex-col px-[10%] gap-5 text-xl'>
                            {
                                links.map((item, key)=>{
                                    return (
                                        <li key={key}><Link style={{color: 'hsl(240, 100%, 5%)'}} to={item.navigation}>{item.title}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
        }
    </div>
  )
}
export default NavBar;