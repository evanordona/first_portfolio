import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>

            <p className='text-xl mt-10'>
            I am currently a Senior Computer Science student at the University of Maryland, graduating Dec. 2023. Coding has been an inspiration to me ever since I was a little kid.
            I'm currently enjoying my pursuit of becoming a Software Engineer and a good developer. Some other hobbies of mine besides programming are basketball, working out, gaming, chess, and side hustles. 
            </p>

            <br />
            <p className='text-xl'>
                Don't hesitate to explore my portfolio and even contact me! Additionally, you can download my resume and find social links on the left
                of the page.   
            </p>
            <br />
            <p className='text-xl'>
                This web application was built using React, Tailwind, MongoDB, Express, and Node. You can check out more of the projects I've built displayed in my portfolio below.  
            </p>
        </div>
    
    </div>
  )
}


export default About