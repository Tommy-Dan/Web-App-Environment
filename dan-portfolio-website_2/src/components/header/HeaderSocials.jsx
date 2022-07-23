import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' rel='noreferrer' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' rel='noreferrer' target="_blank"><FaGithub/></a>
        <a href='https://tweter.com' rel='noreferrer' target="_blank"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials;