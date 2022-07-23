import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocials';



const Header = () => {
  return (
   <header>
      <div className="container header__container">
         <h3>Hello I'm</h3>
         <h1>Tommy Daniel Tucker</h1>
         <h3 className='text-light'>
            Web Developer | Front-End Developer
         </h3>
         <CTA />
         <HeaderSocial />

         <div className='me'>
            <img src={ME} alt='me' />
         </div>

         <a href='#scroll' className='scroll__down'>Scroll Down</a>
      </div>
   </header>
  )
}

export default Header;