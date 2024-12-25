import React from 'react';
import project1 from "../assets/p1.png"
import project2 from "../assets/p2.png"
import project4 from "../assets/p3.png"
import project5 from "../assets/p4.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    img: project4,
    title: "South Asian Youth Table Tennis Championships Website",
    description: `Designed and developed the official website using React.js, Vite, Firebase, Tailwind CSS, 
      and Material UI. Features real-time updates and live data synchronization.`,
    links: {
      site: "https://www.sayttc.com/", // Replace with actual URL
      github: "https://github.com/HeshanNavindu-7/South-Asian-Youth-Table-Tennis-Championship",
    },
  },
  {
    img: project1,
    title: "SUSL Auditorium Reservation System",
    description: `Developed a comprehensive reservation system with Laravel and MySQL. Features include user registration, 
      booking forms, admin dashboard, and availability checking.`,
    links: {
      site: "http://auditorium.sab.ac.lk/", // Replace with actual URL
      github: "https://github.com/SarangaLahiru/SUSL-Faculty-of-Social-Sciences-Prof.-Dayananda-Somasundara-Auditorium-Reservation-System-2024",
    },
  },
  {
    img: project2,
    title: "AgroPulse - Pest Management System",
    description: `A system leveraging Machine Learning and GeminiAI for pest detection and tracking, 
      tailored for farmers. Integrated with weather data and real-time monitoring.`,
    links: {
      site: "https://github.com/your-repository-link", // Replace with actual URL
      github: "https://github.com/SarangaLahiru/AgroPulse",
    },
  },
  {
    img: project5,
    title: "InfoBash V3.0 Cricket Match Platform",
    description: `A comprehensive cricket match management system built with React.js and Firebase. 
      Features team registration, match scheduling, and score recording.`,
    links: {
      site: "https://cricket-rust.vercel.app/", // Replace with actual URL
      github: "https://github.com/SarangaLahiru/SUSL-INFOBASH-V3.0-2024-Cricket-Match",
    },
  },
  // {
  //   img: project5,
  //   title: "SUSL Faculty of Computing Alumni Website",
  //   description: `Developed an alumni website using Next.js and Firebase. Features include user profiles, 
  //     news updates, and advanced search functionalities.`,
  //   links: {
  //     site: "https://github.com/your-repository-link", // Replace with actual URL
  //     github: "https://github.com/your-repository-link",
  //   },
  // },
];


const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a href={project.links.site}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                  View Site
                </a>
                <a href={project.links.github}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                  <AiOutlineGithub />
                </a>

              </div>

            </div>

          </div>
        </Reveal>
      ))}

    </div>
  )
}

export default Portfolio