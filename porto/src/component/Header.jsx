// import React, { useState, useEffect } from 'react';
// import img from '../assets/spii.jpg';
// // import CVModal from './CVModal'; // Import the modal component

// const Header = () => {
//   const roles = ["Web Developer", "Freelancer", "Designer"];
//   const [currentRole, setCurrentRole] = useState(roles[0]);
//   const [isModalOpen, setIsModalOpen] = useState(false); 
 

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prevRole) => {
//         const currentIndex = roles.indexOf(prevRole);
//         const nextIndex = (currentIndex + 1) % roles.length;
//         return roles[nextIndex];
//       });
//     }, 1000); 

//     return () => clearInterval(interval); 
//   }, [roles]);

//   return (
//     <header id="home" className="h-screen bg-cover bg-center flex items-center bg-gray-900 sm:pt-0 pt-96">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//         {/* Left Side: Text Content */}
//         <div className="text-center md:text-left md:w-1/2 animate-pulse">
//           <p className="text-gray-200">
//             <span className="bg-yellow-500 text-white px-4 py-2 rounded text-xl">Hello
//               </span> I'm
//           </p>
//           <h1 className="text-5xl font-bold text-white mt-4">Sabirin</h1>
//           <h2 className="text-2xl text-white mt-2 relative">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r
//              from-yellow-500 to-yellow-500">
//               <span className="animate-text-change">{currentRole}</span>
//             </span>
//           </h2>
//           <p className="text-gray-200 mt-4 max-w-md">
//             Welcome to my portfolio! I am Sabirin, a skilled Full Stack Developer specializing
//             in the MERN stack (MongoDB, Express.js, React, Node.js), with additional expertise in PHP, MySQL, and Java.
//             Proficient in building responsive, scalable web applications, I am passionate about solving
//             complex problems and creating user-friendly websites.
//           </p>
//           <div className="flex space-x-4 mt-6 justify-center md:justify-start">
//             <button className="bg-yellow-500 text-white px-6 py-2 rounded
//              hover:bg-yellow-500">
//               Say Hello
//             </button>
//             <button
//               // onClick={() => setIsModalOpen(true)}
//               className="flex items-center text-white hover:text-yellow-500"
//             >
//               <div className="bg-yellow-500 w-12 h-12 rounded-full
//                flex items-center justify-center hover:bg-[#624d1d] transition duration-300">
//                 <i className="ri-play-fill">CV</i>
//               </div>
//               <span className="ml-2 text-white">Upload My CV</span>
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
//           <img
//             src={img} 
//             alt="Profile"
//             className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow
//              duration-300 border-4 border-yellow-500 w-full max-w-96 h-[450px] animate-pulse"
//             style={{
//               boxShadow: '0 0 20px rgba(255, 165, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.4)',
//               filter: 'brightness(1.1)',
//             }}
//           />
//         </div>
//       </div>

//       {/* CV Modal */}
//       {/* <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
//     </header>
//   );
// };

// export default Header;
// -----------------------
// import React, { useState, useEffect } from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { FiDownload } from 'react-icons/fi';
// import img from '../assets/spii.jpg';

// const Header = () => {
//   const [isCVModalOpen, setIsCVModalOpen] = useState(false);

//   return (
//     <header id="home" className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute rounded-full bg-yellow-500 opacity-10"
//             style={{
//               width: `${Math.random() * 100 + 50}px`,
//               height: `${Math.random() * 100 + 50}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Text Content */}
//           <div className="text-center lg:text-left lg:w-1/2">
//             <div className="inline-block bg-yellow-500 bg-opacity-20 px-4 py-2 rounded-full mb-6">
//               <span className="text-yellow-500 text-sm font-medium">HELLO, I'M</span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//               Sabirin <span className="text-yellow-500">Mohamud</span>
//             </h1>
            
//             <div className="text-2xl md:text-3xl font-semibold text-white mb-6 h-12">
//               <TypeAnimation
//                 sequence={[
//                   'Full Stack Developer',
//                   2000,
//                   'MERN Specialist',
//                   2000,
//                   'UI/UX Designer',
//                   2000,
//                   'Problem Solver',
//                   2000
//                 ]}
//                 wrapper="span"
//                 cursor={true}
//                 repeat={Infinity}
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
//               />
//             </div>
            
//             <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
//               I craft exceptional digital experiences with cutting-edge web technologies.
//               Specializing in the MERN stack, I build scalable, performant applications
//               that drive business results.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
//                 Let's Collaborate
//               </button>
              
//               <button 
//                 onClick={() => setIsCVModalOpen(true)}
//                 className="flex items-center justify-center gap-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:bg-opacity-10 px-6 py-3 rounded-full font-medium transition-all duration-300"
//               >
//                 <FiDownload className="text-lg" />
//                 Download CV
//               </button>
//             </div>
            
//             <div className="mt-10 flex justify-center lg:justify-start gap-6">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white">5+</div>
//                 <div className="text-gray-400 text-sm">Projects Completed</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white">100%</div>
//                 <div className="text-gray-400 text-sm">Client Satisfaction</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Image */}
//           <div className="lg:w-1/2 relative mt-10 lg:mt-0">
//             <div className="relative w-full max-w-md mx-auto">
//               <div className="absolute -inset-4 bg-yellow-500 rounded-2xl opacity-20 blur-xl"></div>
//               <img
//                 src={img}
//                 alt="Sabirin Mohamud"
//                 className="relative rounded-2xl border-4 border-yellow-500 w-full h-auto object-cover z-10 transform hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
// --------------------------------------

// import React, { useState, useEffect } from 'react';
// import profileImg from '../assets/spii.jpg'; // Replace with your image

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const roles = ["Web Developer", "Full Stack Engineer", "UI/UX Designer"];
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header id="home" className="min-h-screen bg-gray-900 flex items-center pt-20">
//       <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
//         {/* Text Content */}
//         <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
//           <div className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg mb-4">
//             <span className="text-lg">Hello, I'm</span>
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Sabirin Mohamud
//           </h1>
          
//           <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
//             {roles[currentRole]}
//           </h2>
          
//           <p className="text-gray-300 mb-8 max-w-lg">
//             I specialize in building exceptional digital experiences. With expertise in 
//             React, Node.js, and modern web technologies, I create fast, responsive, 
//             and user-friendly applications.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition duration-300">
//               Contact Me
//             </button>
//             <button className="flex items-center justify-center text-white hover:text-yellow-500 transition duration-300">
//               <div className="bg-yellow-500 hover:bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mr-2 transition duration-300">
//                 <span className="font-medium">CV</span>
//               </div>
//               <span>Download CV</span>
//             </button>
//           </div>
//         </div>
        
//         {/* Image */}
//         <div className="md:w-1/2 flex justify-center">
//           <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
//             <img 
//               src={profileImg} 
//               alt="Profile" 
//               className="rounded-full border-4 border-yellow-500 w-full h-full object-cover shadow-2xl"
//             />
//             <div className="absolute inset-0 rounded-full border-4 border-transparent animate-ping opacity-0"></div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// ---------------
// import React, { useState, useEffect, useRef } from 'react';
// import profileImg from '../assets/spii.jpg'; // Replace with your image

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const roles = ["Web Developer", "Full Stack Engineer", "UI/UX Designer"];
//   const roleRef = useRef(null);
  
//   // Role rotation effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Animation for role text
//   useEffect(() => {
//     if (roleRef.current) {
//       roleRef.current.classList.add('fade-out');
//       setTimeout(() => {
//         if (roleRef.current) {
//           roleRef.current.classList.remove('fade-out');
//           roleRef.current.classList.add('fade-in');
//           setTimeout(() => {
//             if (roleRef.current) roleRef.current.classList.remove('fade-in');
//           }, 500);
//         }
//       }, 500);
//     }
//   }, [currentRole]);

//   return (
//     <header id="home" className="min-h-screen bg-gray-900 flex items-center pt-20 overflow-hidden">
//       <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
//         {/* Text Content */}
//         <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 z-10">
//           <div className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//             <span className="text-lg font-medium">Hello, I'm</span>
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Sabirin <span className="text-yellow-500">Mohamud</span>
//           </h1>
          
//           <div className="h-16 md:h-20 mb-6 overflow-hidden">
//             <h2 
//               ref={roleRef}
//               className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500"
//             >
//               {roles[currentRole]}
//             </h2>
//           </div>
          
//           <p className="text-gray-300 mb-8 max-w-lg text-lg leading-relaxed">
//             I specialize in building exceptional digital experiences. With expertise in 
//             <span className="text-yellow-400 font-medium"> React</span>, 
//             <span className="text-yellow-400 font-medium"> Node.js</span>, and modern web technologies, 
//             I create <span className="text-white font-medium">fast</span>, 
//             <span className="text-white font-medium"> responsive</span>, and 
//             <span className="text-white font-medium"> user-friendly</span> applications.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <button 
//               className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-medium 
//                         transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1
//                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-600 before:to-yellow-500 
//                         before:rounded-lg before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
//                         overflow-hidden"
//             >
//               <span className="relative z-10">Contact Me</span>
//             </button>
            
//             <button className="flex items-center justify-center group">
//               <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mr-3 
//                             transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/30 group-hover:-translate-y-1">
//                 <span className="font-medium text-white">CV</span>
//                 <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//               </div>
//               <span className="text-white group-hover:text-yellow-400 transition-colors duration-300 font-medium">
//                 Download CV
//               </span>
//             </button>
//           </div>
//         </div>
        
//         {/* Image */}
//         <div className="md:w-1/2 flex justify-center relative">
//           <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
//             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
//             <img 
//               src={profileImg} 
//               alt="Sabirin Mohamud" 
//               className="relative rounded-full border-4 border-yellow-500 w-full h-full object-cover shadow-2xl 
//                         transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-yellow-400 z-10"
//             />
//             <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-yellow-500 rounded-full opacity-10 animate-float"></div>
//             <div className="absolute -top-5 -left-5 w-16 h-16 bg-yellow-400 rounded-full opacity-10 animate-float-delay"></div>
//           </div>
//         </div>
//       </div>

//       {/* Custom animations in global CSS */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeOut {
//           from { opacity: 1; transform: translateY(0); }
//           to { opacity: 0; transform: translateY(-10px); }
//         }
//         @keyframes ping-slow {
//           0% { transform: scale(0.95); opacity: 0.8; }
//           70% { transform: scale(1.1); opacity: 0.2; }
//           100% { transform: scale(1.15); opacity: 0; }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//         .fade-in {
//           animation: fadeIn 0.5s ease-out forwards;
//         }
//         .fade-out {
//           animation: fadeOut 0.5s ease-out forwards;
//         }
//         .animate-ping-slow {
//           animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delay {
//           animation: float 6s ease-in-out infinite 1.5s;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;


// ----------------

