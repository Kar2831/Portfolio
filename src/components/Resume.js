import React from 'react'
import ResumeImg from '../assets/resume.jpg';

export default function Resume() {

  const config = {
    link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }

  return (
    <section id='resume' className='flex flex-col items-center md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className=' md:flex-row md:w-1/2 w-[500px] flex flex-col justify-center items-center'>
            <div className='text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my Resume <a href={config.link} className='btn' >Download</a> </p>
            </div>
        </div>
    </section>
  )
}
