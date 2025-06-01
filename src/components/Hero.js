import React from 'react'
import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";


export default function Hero() {
  const config = {
    subtitle : 'Im a Full-Stack Developer and Designer',
    social : {
        twitter: 'https://twitter.com/jvlcode',
        facebook: 'https:facebook.com/jvlcode',
        linkedin: 'https://linkedin.com/company/jvlcode'
    }
  }
  return (
    <section className='flex px-5 py-32 bg-primary justify-center flex-col items-center space-y-10 md:flex-row'>
        <div className='md:w-1/2 flex flex-col'>
             <h1 className='text-white text-4xl font-hero-font'>
              Hi,<br/>Im Karthikeyan.M  <br/>
              <p className='text-2xl'>{config.subtitle}</p>
              </h1>

            <div className='flex md:py-10'>
                <a className='pr-5 hover:text-white' href={config.social.twitter}>{<AiOutlineTwitter size={40}/>}</a>
                <a className='pr-5 hover:text-white' href={config.social.facebook}>{<AiOutlineFacebook size={40} />}</a>
                <a className='hover:text-white' href={config.social.linkedin}>{<AiOutlineLinkedin size={40} />}</a>
            </div>
        </div>
        <img className='w-[400px] md:w-1/3' src={HeroImg}/>
    </section>
  )
}
