// import React from 'react';
// import { motion } from 'framer-motion';
// import img from '../assets/img6.jpg';
// import img1 from '../assets/img3.jpg';
// import img2 from '../assets/img9.jpg';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   },
//   hover: {
//     y: -5,
//     transition: {
//       duration: 0.2
//     }
//   }
// };

// const Project = () => {
//   return (
//     <section id="project" className="bg-gray-800 py-20 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <motion.p 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-gray-400 text-center"
//         >
//           Portfolio
//         </motion.p>
//         <motion.h2 
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center text-white mt-2"
//         >
//           <span className="text-yellow-500">Latest</span> Project
//         </motion.h2>
        
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
//         >
//           <motion.div 
//             variants={itemVariants}
//             whileHover="hover"
//             className="bg-gray-900 p-4 rounded-lg"
//           >
//             <motion.img 
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               src={img1} 
//               alt="project" 
//               className="rounded-lg w-full h-[300px] object-cover" 
//             />
//             <p className='text-yellow-500 mt-4 text-3xl'>Ecomerce Rental House</p>
//             <h1 className='text-white mt-2 text-xl'>The project is built with React js, Tailwindcss, Node js and MongoDB</h1>   
//           </motion.div>
          
//           <motion.div 
//             variants={itemVariants}
//             whileHover="hover"
//             className="bg-gray-900 p-4 rounded-lg"
//           >
//             <motion.img 
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               src={img} 
//               alt="project" 
//               className="rounded-lg w-full h-[300px] object-cover" 
//             />
//             <p className='text-yellow-500 mt-4 text-3xl'>System Gov</p>
//             <h1 className='text-white mt-2 text-xl'>This system utilizes Tailwind CSS, PHP, and MySQL</h1>
//           </motion.div>
          
//           <motion.div 
//             variants={itemVariants}
//             whileHover="hover"
//             className="bg-gray-900 p-4 rounded-lg"
//           >
//             <motion.img 
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               src={img2} 
//               alt="project" 
//               className="rounded-lg w-full h-[300px] object-cover" 
//             />
//             <p className='text-yellow-500 mt-4 text-3xl'>Ecomerce E_Suuq</p>
//             <h1 className='text-white mt-2 text-xl'>The project is built with React js and Tailwindcss</h1>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Project;

// -----------------

// import React from 'react';
// import { motion } from 'framer-motion';
// import project1 from '../assets/img.jpg';
// import project2 from '../assets/img3.jpg';
// import project3 from '../assets/img6.jpg';
// import project4 from '../assets/img7.jpg';

// const projects = [
//   {
//     image: project1,
//     title: "E-commerce Platform",
//     description: "Full-featured online store with React, Node.js, and MongoDB",
//     tags: ["React", "Node.js", "MongoDB"],
//     link: "#"
//   },
//   {
//     image: project2,
//     title: "Task Management App",
//     description: "Productivity application with real-time updates",
//     tags: ["React", "Firebase", "Material UI"],
//     link: "#"
//   },
//   {
//     image: project3,
//     title: "Portfolio Website",
//     description: "Custom portfolio design with animations",
//     tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
//     link: "#https://spa-restuarant.vercel.app/"
//   }
//   ,
//   {
//     image: project4,
//     title: "Portfolio Website",
//     description: "Custom portfolio design with animations",
//     tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
//     link: "#"
//   }
// ];

// const Project = () => {
//   return (
//     <section id="project" className="py-20 bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
//             My <span className="text-yellow-500">Projects</span>
//           </h2>
//           <p className="text-gray-400">Most recent work</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.03 }}
//               className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover transition duration-500 hover:scale-110"
//                 />
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <span 
//                       key={i}
//                       className="bg-gray-700 text-yellow-500 px-3 py-1 rounded-full text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
                
//                 <a 
//                   href={project.link}
//                   className="inline-block text-yellow-500 hover:text-yellow-400 font-medium"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;
// ---------------------------------

// import React from 'react';
// import { motion } from 'framer-motion';
// import project1 from '../assets/img.jpg';
// import project2 from '../assets/img3.jpg';
// import project3 from '../assets/img6.jpg';
// import project4 from '../assets/img7.jpg';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   },
//   hover: {
//     y: -10,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut"
//     }
//   }
// };

// const projects = [
//   {
//     image: project1,
//     title: "E-commerce Platform",
//     description: "Full-featured online store with React, Node.js, and MongoDB",
//     tags: ["React", "Node.js", "MongoDB"],
//     link: "#"
//   },
//   {
//     image: project2,
//     title: "Task Management App",
//     description: "Productivity application with real-time updates",
//     tags: ["React", "Firebase", "Material UI"],
//     link: "#"
//   },
//   {
//     image: project3,
//     title: "Portfolio Website",
//     description: "Custom portfolio design with animations",
//     tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
//     link: "https://spa-restuarant.vercel.app/"
//   },
//   {
//     image: project4,
//     title: "Portfolio Website",
//     description: "Custom portfolio design with animations",
//     tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
//     link: "#"
//   }
// ];

// const Project = () => {
//   return (
//     <section id="project" className="py-20 bg-gray-800">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//             My <span className="text-yellow-500">Projects</span>
//           </h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-400 text-lg"
//           >
//             Explore my recent work
//           </motion.p>
//         </motion.div>
        
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover="hover"
//               className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-500 transition-colors duration-300"
//             >
//               <motion.div 
//                 className="h-64 overflow-hidden relative"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                   <motion.a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
//                   >
//                     Live Preview
//                   </motion.a>
//                 </div>
//               </motion.div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tags.map((tag, i) => (
//                     <motion.span
//                       key={i}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.1 * i }}
//                       className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium"
//                     >
//                       {tag}
//                     </motion.span>
//                   ))}
//                 </div>
                
//                 <motion.div
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <a 
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-yellow-500 hover:text-yellow-400 font-medium group"
//                   >
//                     View Project
//                     <svg 
//                       xmlns="http://www.w3.org/2000/svg" 
//                       className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
//                       viewBox="0 0 20 20" 
//                       fill="currentColor"
//                     >
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Project;


// -------------------------

import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/img.jpg';
import project2 from '../assets/bg-peaza.jpg';
import project3 from '../assets/cores.jpg';
import project4 from '../assets/img9.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const projects = [


  {
    image: project2,
    title: "Nast-web ",
    description: "Productivity application with real-time updates",
    tags: ["Javasript", " Html", "Tailwindcss"],
    link: "https://sabirinmohamudadan.github.io/Nasta_web/"
  },
  {
    image: project1,
    title: "E-commerce Platform",
    description: "Full-featured online store with React, Node.js, and MongoDB",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
 
  {
    image: project3,
    title: "Restuarant Website ",
    description: " Restuarant web  design with animations and highly quailty functionality",
    tags: ["React.js", "Tailwind CSS", "Framer Motion" ,"Redux"],
    link: "https://spa-restuarant.vercel.app/"
  },
  {
    image: project4,
    title: "Small app",
    description: "image post design with animations",
    tags: ["Reactjs", "Tailwind CSS", "Framer Motion"],
    link: "https://small-app-six.vercel.app/"
  }
];

const Project = () => {
  return (
    <section id="project" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-yellow-500">Projects</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg"
          >
            Explore my recent work
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-500 transition-colors duration-300 flex flex-col h-full"
            >
              {/* Image container with fixed aspect ratio */}
              <div className="relative pt-[56.25%] overflow-hidden"> {/* 16:9 aspect ratio */}
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Live Preview
                  </motion.a>
                </div>
              </div>
              
              {/* Content container with flex-grow to take remaining space */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400 font-medium group"
                  >
                    View Project
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;