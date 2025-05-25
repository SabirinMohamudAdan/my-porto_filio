import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/img6.jpg';
import img1 from '../assets/img3.jpg';
import img2 from '../assets/img9.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

const Project = () => {
  return (
    <section id="project" className="bg-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center"
        >
          Portfolio
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mt-2"
        >
          <span className="text-yellow-500">Latest</span> Project
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="bg-gray-900 p-4 rounded-lg"
          >
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src={img1} 
              alt="project" 
              className="rounded-lg w-full h-[300px] object-cover" 
            />
            <p className='text-yellow-500 mt-4 text-3xl'>Ecomerce Rental House</p>
            <h1 className='text-white mt-2 text-xl'>The project is built with React js, Tailwindcss, Node js and MongoDB</h1>   
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="bg-gray-900 p-4 rounded-lg"
          >
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src={img} 
              alt="project" 
              className="rounded-lg w-full h-[300px] object-cover" 
            />
            <p className='text-yellow-500 mt-4 text-3xl'>System Gov</p>
            <h1 className='text-white mt-2 text-xl'>This system utilizes Tailwind CSS, PHP, and MySQL</h1>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="bg-gray-900 p-4 rounded-lg"
          >
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src={img2} 
              alt="project" 
              className="rounded-lg w-full h-[300px] object-cover" 
            />
            <p className='text-yellow-500 mt-4 text-3xl'>Ecomerce E_Suuq</p>
            <h1 className='text-white mt-2 text-xl'>The project is built with React js and Tailwindcss</h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;