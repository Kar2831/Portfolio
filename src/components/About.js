import React from 'react'
import AboutImg from '../assets/about.png';

export default function About() {

  const config = {
    line1: 'Hi, My name is Karthikeyan.M Im a Full-Stack Web Developer. I built beautiful websites with React.js and Tailwind CSS+Bootstrap',
    line2: 'I am proficient in Front-End Skills like React.js, Redux, Redux Tool, Axios, Tailwind CSS, SaSS,CSS3 and many more.',
    line3: 'In Backend I know Node.js, Express.js, MongoDB and Mongoose.'
  }

  return (
    <section id='about' className='flex flex-col items-center md:flex-row bg-secondary px-5'>
        <div className='w-[400px] py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className=' md:flex-row md:w-1/2 w-[500px] flex flex-col justify-center items-center'>
            <div className='text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
  )
}
