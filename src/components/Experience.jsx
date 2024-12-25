import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    company: 'South Asian Youth Table Tennis Championships',
    period: 'Dec 2023 - Jun 2024',
    description: `Designed, developed, and maintained the official event website using React.js, Vite, Firebase, 
      Tailwind CSS, and Material UI. Led the coordination and execution of the event, managing technical officers, 
      and implementing real-time match monitoring and live updates.`,
  },
  {
    company: 'IEEE Volunteer',
    period: 'Apr 2023 - Present',
    description: `Led the development of an inter-university quiz competition platform with real-time question-and-answer 
      functionality and progress tracking. Integrated various technologies and streamlined the competition process.`,
  },
  {
    company: 'IEEE Computer Society Chapter, SUSL Branch',
    period: 'Ongoing',
    description: `Serving as Vice Chair, driving initiatives for fostering student engagement and collaboration 
      within the field of computer science. Spearheading events, workshops, and knowledge-sharing sessions to promote 
      technical excellence.`,
  },
  {
    company: 'GenO3 Startup',
    period: 'Ongoing',
    description: `Co-Founder of GenO3, a startup focused on leveraging cutting-edge technology and innovation 
      to deliver impactful solutions. Spearheading strategic planning, product development, and cross-functional 
      collaboration to drive growth and success.`,
  },

];



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>


            </motion.div>
          </Reveal>
        ))}

      </motion.div>


    </div>
  )
}

export default Experience