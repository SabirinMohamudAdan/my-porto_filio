// import React from 'react';
// import img from '../assets/spii.jpg';
// const About = () => {
//   return (
//     <section id="about" className="bg-gray-800 sm:pt-0 pt-80">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-white">About
//            <span className="text-yellow-500">Me</span></h2>
//         <p className="text-gray-400 text-center mt-2"> Developer!</p>
//         <div className="flex flex-col md:flex-row items-center mt-8">
//           <div className="md:w-1/2">
//             <img src={img} alt="about" className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300
//      border-4 border-yellow-500 w-full max-w-96 h-96 animate-pulse 
//             "
//             style={{
//                 boxShadow: '0 0 20px rgba(255, 165, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.4)',
//                 filter: 'brightness(1.1)',
//               }} />
//           </div>
//           <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
//             <p className="text-gray-200">
//             As a Web Developer, I specialize in solving complex problems and 
//             developing dynamic, responsive websites, particularly in the e-commerce 
//             domain. My expertise includes designing and building user-friendly 
//             interfaces, integrating secure, and optimizing website 
//             performance to ensure a seamless shopping experience. I work closely with 
//             clients and stakeholders
//              to understand their business needs, 
//             </p>
//             <button className="bg-yellow-500 text-white px-6 py-2 rounded mt-4 
//             hover:bg-[#624d1d] transition duration-300">More About</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from 'react';
// import { motion } from 'framer-motion';
// import img from '../assets/spii.jpg';
// import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';

// const About = () => {
//   const skills = [
//     { name: 'Frontend', icon: <FaReact className="text-2xl" />, items: ['React', 'Next.js', 'Tailwind CSS', 'Redux'] },
//     { name: 'Backend', icon: <FaNodeJs className="text-2xl" />, items: ['Node.js', 'Express', 'PHP', 'Java'] },
//     { name: 'Database', icon: <FaDatabase className="text-2xl" />, items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
//     { name: 'Other', icon: <FaCode className="text-2xl" />, items: ['Git', 'Docker', 'AWS', 'REST APIs'] }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10">
//         <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-yellow-500 filter blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-yellow-500 filter blur-3xl"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm font-medium text-yellow-500 tracking-wider">ABOUT ME</span>
//           <h2 className="text-4xl font-bold text-white mt-2">
//             Professional <span className="text-yellow-500">Background</span>
//           </h2>
//           <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           <motion.div 
//             className="lg:w-1/2"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative group">
//               <div className="absolute -inset-2 bg-yellow-500 rounded-xl opacity-20 group-hover:opacity-30 blur-md transition duration-500"></div>
//               <img 
//                 src={img} 
//                 alt="Sabirin Mohamud" 
//                 className="relative rounded-xl border-4 border-yellow-500 w-full max-w-lg h-auto object-cover transform group-hover:-translate-y-2 transition duration-500"
//               />
//             </div>
//           </motion.div>

//           <motion.div 
//             className="lg:w-1/2"
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold text-white mb-6">Who Am I?</h3>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               I'm a passionate Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). 
//               With a strong foundation in computer science and years of hands-on experience, I specialize in building 
//               scalable, performant web applications that deliver exceptional user experiences.
//             </p>
//             <p className="text-gray-300 mb-8 leading-relaxed">
//               My approach combines technical excellence with creative problem-solving. I thrive in collaborative 
//               environments and enjoy tackling complex challenges to deliver solutions that exceed expectations.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
//               {skills.map((skill, index) => (
//                 <motion.div 
//                   key={skill.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * index }}
//                   viewport={{ once: true }}
//                   className="bg-gray-700 bg-opacity-50 rounded-lg p-4 border border-gray-600 hover:border-yellow-500 transition-colors duration-300"
//                 >
//                   <div className="flex items-center mb-3">
//                     <div className="text-yellow-500 mr-3">
//                       {skill.icon}
//                     </div>
//                     <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {skill.items.map(item => (
//                       <span key={item} className="text-sm bg-gray-800 text-gray-200 px-3 py-1 rounded-full">
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
//               View Full Resume
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;