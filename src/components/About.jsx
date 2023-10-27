import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className= 'xs:w-[250px] w-full' >
      <motion.div variants={ fadeIn('right', 'spring', 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options = {{
          max:45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16' />
          <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} id='about'>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm a passionate developer skilled in front-end development, specializing in Shopify and React, and proficient in Artificial Intelligence, Machine Learning (AIML), and Deep Learning. I thrive on learning and innovation. My Shopify expertise enables me to create visually appealing e-commerce solutions, while React allows me to build dynamic, responsive web applications. I'm deeply intrigued by the potential of AI and ML, experienced in data analysis, and always eager to learn new technologies. I'm excited to collaborate on impactful projects and explore the ever-evolving tech landscape. Let's connect and transform ideas into reality.
      </motion.p>
      <div className='mt-4 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
