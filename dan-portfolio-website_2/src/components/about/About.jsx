import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';



const About = () => {
  return (
     <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt='About Me' />
                </div>
            </div>

            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className='about__card'>
                        <FaUsers className='about__icon' />
                        <h5>Clients</h5>
                        <small>2+ Clients</small>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon' />
                        <h5>Projects</h5>
                        <small>10+ Major and Mini Projects</small>
                    </article>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolorem, molestiae? Quas vero vel error modi doloremque 
                  quam laudantium! Ad impedit nisi tempora iure at, 
                  dignissimos consequatur maiores est non facere?
                  Aspernatur, eos incidunt? Molestias quibusdam nobis eaque 
                  tempora accusantium dicta dolores, sint ipsam animi, quaerat cupiditate. 
                  Ratione aliquid explicabo alias aperiam quaerat eveniet ipsum 
                  reprehenderit autem ipsam. Enim, minus culpa!
                </p>

                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
     </section>
  )
}

export default About;