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

// import React, { useState, useEffect, useRef } from 'react';
// import { FaReact, FaNode } from 'react-icons/fa';
// import { FaHeart, FaThumbsUp } from 'react-icons/fa';
// import profileImg from '../assets/spii.jpg'; // High-resolution professional headshot

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const roles = ["Web Developer", ".........", "UI/UX Designer"];
//   const roleRef = useRef(null);
//   const imageRef = useRef(null);
//   const headerRef = useRef(null);
  
//   // Parallax effect setup
//   useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current) {
//         const scrollY = window.scrollY;
//         headerRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Role rotation with smooth transitions
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3200);
//     return () => clearInterval(interval);
//   }, []);

//   // Text animation handler
//   useEffect(() => {
//     if (roleRef.current) {
//       roleRef.current.classList.add('role-exit');
//       setTimeout(() => {
//         if (roleRef.current) {
//           roleRef.current.classList.remove('role-exit');
//           roleRef.current.classList.add('role-enter');
//           setTimeout(() => {
//             if (roleRef.current) roleRef.current.classList.remove('role-enter');
//           }, 800);
//         }
//       }, 500);
//     }
//   }, [currentRole]);

//   // Image hover effect
//   const handleImageHover = (hovering) => {
//     setIsHovering(hovering);
//     if (imageRef.current) {
//       imageRef.current.style.transform = hovering 
//         ? 'scale(1.03) rotate(2deg)' 
//         : 'scale(1) rotate(0deg)';
//     }
//   };

//   return (
//     <header 
//       id="home" 
//       ref={headerRef}
//       className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20 overflow-hidden relative"
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-400 rounded-full filter blur-2xl opacity-10 animate-float-delay"></div>
//         <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-yellow-300 rounded-full filter blur-xl opacity-10 animate-float"></div>
//       </div>

//       <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
//         {/* Text Content */}
//         <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
//           {/* Greeting badge with micro-interaction */}
//           <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 
//                           text-white px-5 py-2 rounded-full mb-6 shadow-lg 
//                           hover:shadow-xl transition-all duration-500 hover:scale-[1.02]
//                           animate-background-shine bg-[length:200%_100%]">
//             <span className="text-lg font-medium tracking-wide">HELLO WORLD</span>
//           </div>
          
//           {/* Name with gradient highlight */}
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
//               SABIRIN
//             </span>{' '}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400
//              to-yellow-600">
//               MOHAMUD
//             </span>
//           </h1>
          
//           {/* Animated role text */}
//           <div className="h-20 md:h-24 mb-8 overflow-hidden relative">
//             <h2 
//               ref={roleRef}
//               className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent 
//                         bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-wide"
//             >
//               {roles[currentRole]}
//             </h2>
//             <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
//           </div>
          
//           {/* Description with highlighted skills */}
//           <p className="text-gray-300 mb-10 max-w-2xl text-lg md:text-xl leading-relaxed">
//             Crafting <span className="text-yellow-400 font-medium">high-performance</span> digital experiences with 
//             <span className="text-white font-semibold"> React</span>, 
//             <span className="text-white font-semibold"> Node.js</span>, and 
//             <span className="text-white font-semibold"> modern web architecture</span>. 
//             Specializing in <span className="text-yellow-400">scalable solutions</span> that 
//             <span className="text-white font-medium"> engage users</span> and 
//             <span className="text-white font-medium"> drive results</span>.
//           </p>
          
//           {/* Action buttons with advanced interactions */}
//           <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
//             <button 
//               className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
//                         px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg
//                         transition-all duration-500 hover:shadow-xl hover:-translate-y-1
//                         overflow-hidden isolate"
//               aria-label="Contact Me"
//             >
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//                 GET IN TOUCH
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 
//                               group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 
//                               group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
            
//             <button 
//               className="relative group flex items-center justify-center gap-3 px-6 py-4
//                         text-gray-300 hover:text-white transition-colors duration-300"
//               aria-label="Download CV"
//             >
//               <div className="relative flex items-center justify-center">
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 
//                               rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                 <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                               group-hover:bg-transparent transition-colors duration-300">
//                   <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
//                   </svg>
//                 </div>
//                 <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 
//                                 group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//               </div>
//               <span className="font-medium">DOWNLOAD CV</span>
//             </button>
//           </div>
//         </div>
        
//         {/* Professional image with dynamic effects */}
//         <div 
//           className="lg:w-1/2 flex justify-center relative mt-16 lg:mt-0"
//           onMouseEnter={() => handleImageHover(true)}
//           onMouseLeave={() => handleImageHover(false)}
//         >
//           <div 
//             ref={imageRef}
//             className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] transition-all duration-700 ease-out"
//           >
//             {/* Glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full 
//                           blur-xl opacity-20 animate-pulse"></div>
            
//             {/* Main profile image */}
//             <img 
//               src={profileImg} 
//               alt="Sabirin Mohamud - Professional Web Developer" 
//               className="relative rounded-full border-4 border-yellow-500 w-full h-full object-cover shadow-2xl z-10
//                         transition-all duration-500 ease-out"
//             />
            
//             {/* Floating tech badges */}
//             {/* <div className={`absolute -bottom-5 -right-5 w-24 h-24 bg-gray-800 rounded-full border-2 border-yellow-500 
//                             flex items-center justify-center shadow-lg transition-all duration-700 ease-out
//                             ${isHovering ? 'translate-x-2 -translate-y-2 rotate-12' : ''}`}>
//               <span className="text-yellow-400 font-bold text-sm">REACT</span>
//             </div>

            
//             <div className={`absolute -top-5 -left-5 w-20 h-20 bg-gray-800 rounded-full border-2 border-yellow-500 
//                             flex items-center justify-center shadow-lg transition-all duration-700 ease-out delay-75
//                             ${isHovering ? '-translate-x-2 translate-y-2 -rotate-12' : ''}`}>
//               <span className="text-yellow-400 font-bold text-sm">NODE</span>
//             </div> */}


//             {/* Floating tech badges with professional icons */}
// {/* Premium Portfolio Tech Badges */}
// {/* Like/Love Reaction Badges */}
// <div className="absolute -right-6 -bottom-6 z-20">
//   <div className={`relative w-28 h-28 bg-gray-800/90 backdrop-blur-md rounded-2xl 
//                   border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out
//                   group ${isHovering ? 'translate-y-2 -rotate-3 scale-[1.02]' : ''}
//                   hover:shadow-pink-500/20 hover:border-pink-500/40`}>
//     <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
//       {/* Heart Icon Container */}
//       <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
//                      group-hover:bg-pink-500/10 group-hover:shadow-pink-500/10">
//         <FaHeart className="text-5xl text-pink-500 transition-transform duration-500 
//                            group-hover:scale-110 group-hover:animate-pulse" />
//       </div>
//       {/* Reaction Count */}
//       <span className="text-xs font-medium text-gray-300 mt-1">
//         24K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Loves</span>
//       </span>
//     </div>
//   </div>
// </div>

// <div className="absolute -left-6 -top-6 z-20">
//   <div className={`relative w-24 h-24 bg-gray-800/90 backdrop-blur-md rounded-2xl 
//                   border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out delay-100
//                   group ${isHovering ? 'translate-y-2 rotate-3 scale-[1.02]' : ''}
//                   hover:shadow-blue-500/20 hover:border-blue-500/40`}>
//     <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
//       {/* Thumbs Up Icon Container */}
//       <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
//                      group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
//         <FaThumbsUp className="text-4xl  text-yellow-500 transition-transform duration-500 
//                              group-hover:scale-110 group-hover:rotate-12" />
//       </div>
//       {/* Reaction Count */}
//       <span className="text-xs font-medium text-gray-300 mt-1">
//         18K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Likes</span>
//       </span>
//     </div>
//   </div>
// </div>
// {/* -------------------- */}
            
//             {/* Animated connection lines */}
//             <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//               <line 
//                 x1="70%" y1="70%" x2="85%" y2="85%" 
//                 stroke="url(#lineGradient)" 
//                 strokeWidth="2" 
//                 strokeDasharray="0 10"
//                 className={`transition-all duration-1000 ease-out ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//               />
//               <line 
//                 x1="30%" y1="30%" x2="15%" y2="15%" 
//                 stroke="url(#lineGradient)" 
//                 strokeWidth="2" 
//                 strokeDasharray="0 10"
//                 className={`transition-all duration-1000 ease-out delay-100 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//               />
//               <defs>
//                 <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
//                   <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Custom animations */}
//       <style jsx global>{`
//         @keyframes roleEnter {
//           0% { opacity: 0; transform: translateY(15px) scale(0.95); }
//           100% { opacity: 1; transform: translateY(0) scale(1); }
//         }
//         @keyframes roleExit {
//           0% { opacity: 1; transform: translateY(0) scale(1); }
//           100% { opacity: 0; transform: translateY(-15px) scale(0.95); }
//         }
//         @keyframes ping-slow {
//           0% { transform: scale(0.95); opacity: 0.8; }
//           70% { transform: scale(1.2); opacity: 0.2; }
//           100% { transform: scale(1.3); opacity: 0; }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes background-shine {
//           from { background-position: 0 0; }
//           to { background-position: -200% 0; }
//         }
//         .role-enter {
//           animation: roleEnter 0.8s cubic-bezier(0.2, 0, 0.1, 1) forwards;
//         }
//         .role-exit {
//           animation: roleExit 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards;
//         }
//         .animate-ping-slow {
//           animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//         .animate-float-delay {
//           animation: float 8s ease-in-out infinite 2s;
//         }
//         .animate-background-shine {
//           animation: background-shine 2s linear infinite;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;

// --------------------------


// import React, { useState, useEffect, useRef } from 'react';
// import { FaReact, FaNode } from 'react-icons/fa';
// import { FaHeart, FaThumbsUp } from 'react-icons/fa';
// import profileImg from '../assets/spii.jpg'; // High-resolution professional headshot

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const roles = ["Web Developer", ".........", "UI/UX Designer"];
//   const roleRef = useRef(null);
//   const imageRef = useRef(null);
//   const headerRef = useRef(null);
  
//   // Parallax effect setup
//   useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current) {
//         const scrollY = window.scrollY;
//         headerRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Role rotation with smooth transitions
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3200);
//     return () => clearInterval(interval);
//   }, []);

//   // Text animation handler
//   useEffect(() => {
//     if (roleRef.current) {
//       roleRef.current.classList.add('role-exit');
//       setTimeout(() => {
//         if (roleRef.current) {
//           roleRef.current.classList.remove('role-exit');
//           roleRef.current.classList.add('role-enter');
//           setTimeout(() => {
//             if (roleRef.current) roleRef.current.classList.remove('role-enter');
//           }, 800);
//         }
//       }, 500);
//     }
//   }, [currentRole]);

//   // Image hover effect
//   const handleImageHover = (hovering) => {
//     setIsHovering(hovering);
//     if (imageRef.current) {
//       imageRef.current.style.transform = hovering 
//         ? 'scale(1.03) rotate(2deg)' 
//         : 'scale(1) rotate(0deg)';
//     }
//   };

//   return (
//     <header 
//       id="home" 
//       ref={headerRef}
//       className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20 overflow-hidden relative"
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-400 rounded-full filter blur-2xl opacity-10 animate-float-delay"></div>
//         <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-yellow-300 rounded-full filter blur-xl opacity-10 animate-float"></div>
//       </div>

//       <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
//         {/* Text Content */}
//         <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
//           {/* Greeting badge with micro-interaction */}
//           <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 
//                           text-white px-5 py-2 rounded-full mb-6 shadow-lg 
//                           hover:shadow-xl transition-all duration-500 hover:scale-[1.02]
//                           animate-background-shine bg-[length:200%_100%]">
//             <span className="text-lg font-medium tracking-wide">Hi, I am</span>
//           </div>
          
//           {/* Name with gradient highlight */}
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
//               SABIRIN
//             </span>{' '}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400
//              to-yellow-600">
//               MOHAMUD
//             </span>
//           </h1>
          

//           {/* Download CV button - updated to open modal */}
//       <button 
//         onClick={() => setShowCVModal(true)}
//         className="relative group flex items-center justify-center gap-3 px-6 py-4
//                   text-gray-300 hover:text-white transition-colors duration-300"
//         aria-label="Download CV"
//       ></button>
//           {/* Animated role text */}
//           <div className="h-20 md:h-24 mb-8 overflow-hidden relative">
//             <h2 
//               ref={roleRef}
//               className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent 
//                         bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-wide"
//             >
//               {roles[currentRole]}
//             </h2>
//             <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
//           </div>
          
//           {/* Description with highlighted skills */}
//           <p className="text-gray-300 mb-10 max-w-2xl text-lg md:text-xl
//            leading-relaxed">


//                Welcome to my portfolio! I am Sabirin, a skilled Full Stack Developer specializing
//            in the <span className=" text-yellow-500 font-semibold"> MERN stack (MongoDB, Express.js, React, Node.js), </span> with additional expertise in PHP, MySQL, and Java.
//            Proficient in building responsive, scalable web applications, I am passionate about solving
//            complex problems and creating user-friendly websites
         
//           </p>
          
//           {/* Action buttons with advanced interactions */}
//           <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
//             <button 
//               className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
//                         px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg
//                         transition-all duration-500 hover:shadow-xl hover:-translate-y-1
//                         overflow-hidden isolate"
//               aria-label="Contact Me"
//             >
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//                 GET IN TOUCH
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 
//                               group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 
//                               group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
            
//             <button 
//               className="relative group flex items-center justify-center gap-3 px-6 py-4
//                         text-gray-300 hover:text-white transition-colors duration-300"
//               aria-label="Download CV"
//             >
//               <div className="relative flex items-center justify-center">
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 
//                               rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                 <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                               group-hover:bg-transparent transition-colors duration-300">
//                   <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
//                   </svg>
//                 </div>
//                 <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 
//                                 group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//               </div>
//               <span className="font-medium">DOWNLOAD CV</span>
//             </button>
//           </div>
//         </div>
        
//         {/* Professional image with dynamic effects */}
//         <div 
//           className="lg:w-1/2 flex justify-center relative mt-16 lg:mt-0"
//           onMouseEnter={() => handleImageHover(true)}
//           onMouseLeave={() => handleImageHover(false)}
//         >
//           <div 
//             ref={imageRef}
//             className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] transition-all duration-700 ease-out"
//           >
//             {/* Glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full 
//                           blur-xl opacity-20 animate-pulse"></div>
            
//             {/* Main profile image */}
//             <img 
//               src={profileImg} 
//               alt="Sabirin Mohamud - Professional Web Developer" 
//               className="relative rounded-full border-4 border-yellow-500 w-full h-full object-cover shadow-2xl z-10
//                         transition-all duration-500 ease-out"
//             />
            
//             {/* Floating tech badges */}
//             {/* <div className={`absolute -bottom-5 -right-5 w-24 h-24 bg-gray-800 rounded-full border-2 border-yellow-500 
//                             flex items-center justify-center shadow-lg transition-all duration-700 ease-out
//                             ${isHovering ? 'translate-x-2 -translate-y-2 rotate-12' : ''}`}>
//               <span className="text-yellow-400 font-bold text-sm">REACT</span>
//             </div>

            
//             <div className={`absolute -top-5 -left-5 w-20 h-20 bg-gray-800 rounded-full border-2 border-yellow-500 
//                             flex items-center justify-center shadow-lg transition-all duration-700 ease-out delay-75
//                             ${isHovering ? '-translate-x-2 translate-y-2 -rotate-12' : ''}`}>
//               <span className="text-yellow-400 font-bold text-sm">NODE</span>
//             </div> */}


//             {/* Floating tech badges with professional icons */}
// {/* Premium Portfolio Tech Badges */}
// {/* Like/Love Reaction Badges */}
// <div className="absolute -right-6 -bottom-6 z-20">
//   <div className={`relative w-28 h-28 bg-gray-800/90 backdrop-blur-md rounded-2xl 
//                   border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out
//                   group ${isHovering ? 'translate-y-2 -rotate-3 scale-[1.02]' : ''}
//                   hover:shadow-pink-500/20 hover:border-pink-500/40`}>
//     <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
//       {/* Heart Icon Container */}
//       <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
//                      group-hover:bg-pink-500/10 group-hover:shadow-pink-500/10">
//         <FaHeart className="text-5xl text-pink-500 transition-transform duration-500 
//                            group-hover:scale-110 group-hover:animate-pulse" />
//       </div>
//       {/* Reaction Count */}
//       <span className="text-xs font-medium text-gray-300 mt-1">
//         24K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Loves</span>
//       </span>
//     </div>
//   </div>
// </div>

// <div className="absolute -left-6 -top-6 z-20">
//   <div className={`relative w-24 h-24 bg-gray-800/90 backdrop-blur-md rounded-2xl 
//                   border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out delay-100
//                   group ${isHovering ? 'translate-y-2 rotate-3 scale-[1.02]' : ''}
//                   hover:shadow-blue-500/20 hover:border-blue-500/40`}>
//     <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
//       {/* Thumbs Up Icon Container */}
//       <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
//                      group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
//         <FaThumbsUp className="text-4xl  text-yellow-500 transition-transform duration-500 
//                              group-hover:scale-110 group-hover:rotate-12" />
//       </div>
//       {/* Reaction Count */}
//       <span className="text-xs font-medium text-gray-300 mt-1">
//         18K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Likes</span>
//       </span>
//     </div>
//   </div>
// </div>
// {/* -------------------- */}
            
//             {/* Animated connection lines */}
//             <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//               <line 
//                 x1="70%" y1="70%" x2="85%" y2="85%" 
//                 stroke="url(#lineGradient)" 
//                 strokeWidth="2" 
//                 strokeDasharray="0 10"
//                 className={`transition-all duration-1000 ease-out ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//               />
//               <line 
//                 x1="30%" y1="30%" x2="15%" y2="15%" 
//                 stroke="url(#lineGradient)" 
//                 strokeWidth="2" 
//                 strokeDasharray="0 10"
//                 className={`transition-all duration-1000 ease-out delay-100 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//               />
//               <defs>
//                 <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
//                   <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Custom animations */}
//       <style jsx global>{`
//         @keyframes roleEnter {
//           0% { opacity: 0; transform: translateY(15px) scale(0.95); }
//           100% { opacity: 1; transform: translateY(0) scale(1); }
//         }
//         @keyframes roleExit {
//           0% { opacity: 1; transform: translateY(0) scale(1); }
//           100% { opacity: 0; transform: translateY(-15px) scale(0.95); }
//         }
//         @keyframes ping-slow {
//           0% { transform: scale(0.95); opacity: 0.8; }
//           70% { transform: scale(1.2); opacity: 0.2; }
//           100% { transform: scale(1.3); opacity: 0; }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes background-shine {
//           from { background-position: 0 0; }
//           to { background-position: -200% 0; }
//         }
//         .role-enter {
//           animation: roleEnter 0.8s cubic-bezier(0.2, 0, 0.1, 1) forwards;
//         }
//         .role-exit {
//           animation: roleExit 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards;
//         }
//         .animate-ping-slow {
//           animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//         .animate-float-delay {
//           animation: float 8s ease-in-out infinite 2s;
//         }
//         .animate-background-shine {
//           animation: background-shine 2s linear infinite;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;


// ---------------------

// import React, { useState, useEffect, useRef } from 'react';
// import { FaReact, FaNode } from 'react-icons/fa';
// import { FaHeart, FaThumbsUp } from 'react-icons/fa';
// import profileImg from '../assets/spii.jpg';

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [showCVModal, setShowCVModal] = useState(false);
//   const roles = ["Web Developer", ".........", "UI/UX Designer"];
//   const roleRef = useRef(null);
//   const imageRef = useRef(null);
//   const headerRef = useRef(null);
  
//   // Parallax effect setup
//   useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current) {
//         const scrollY = window.scrollY;
//         headerRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Role rotation with smooth transitions
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3200);
//     return () => clearInterval(interval);
//   }, []);

//   // Text animation handler
//   useEffect(() => {
//     if (roleRef.current) {
//       roleRef.current.classList.add('role-exit');
//       setTimeout(() => {
//         if (roleRef.current) {
//           roleRef.current.classList.remove('role-exit');
//           roleRef.current.classList.add('role-enter');
//           setTimeout(() => {
//             if (roleRef.current) roleRef.current.classList.remove('role-enter');
//           }, 800);
//         }
//       }, 500);
//     }
//   }, [currentRole]);

//   // Image hover effect
//   const handleImageHover = (hovering) => {
//     setIsHovering(hovering);
//     if (imageRef.current) {
//       imageRef.current.style.transform = hovering 
//         ? 'scale(1.03) rotate(2deg)' 
//         : 'scale(1) rotate(0deg)';
//     }
//   };

//   return (
//     <>
//       <header 
//         id="home" 
//         ref={headerRef}
//         className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20 overflow-hidden relative"
//       >
//         {/* Decorative elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-400 rounded-full filter blur-2xl opacity-10 animate-float-delay"></div>
//           <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-yellow-300 rounded-full filter blur-xl opacity-10 animate-float"></div>
//         </div>

//         <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
//           {/* Text Content */}
//           <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
//             {/* Greeting badge */}
//             <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 
//                             text-white px-5 py-2 rounded-full mb-6 shadow-lg 
//                             hover:shadow-xl transition-all duration-500 hover:scale-[1.02]
//                             animate-background-shine bg-[length:200%_100%]">
//               <span className="text-lg font-medium tracking-wide">Hi, I am</span>
//             </div>
            
//             {/* Name with gradient highlight */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
//                 SABIRIN
//               </span>{' '}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
//                 MOHAMUD
//               </span>
//             </h1>
            
//             {/* Animated role text */}
//             <div className="h-20 md:h-24 mb-8 overflow-hidden relative">
//               <h2 
//                 ref={roleRef}
//                 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent 
//                           bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-wide"
//               >
//                 {roles[currentRole]}
//               </h2>
//               <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
//             </div>
            
//             {/* Description */}
//             <p className="text-gray-300 mb-10 max-w-2xl text-lg md:text-xl leading-relaxed">
//               Welcome to my portfolio! I am Sabirin, a skilled Full Stack Developer specializing
//               in the <span className="text-yellow-500 font-semibold"> MERN stack (MongoDB, Express.js, React, Node.js), </span> 
//               with additional expertise in PHP, MySQL, and Java.
//               Proficient in building responsive, scalable web applications, I am passionate about solving
//               complex problems and creating user-friendly websites
//             </p>
            
//             {/* Action buttons */}
//             <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
//               <button 
//                 className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
//                           px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg
//                           transition-all duration-500 hover:shadow-xl hover:-translate-y-1
//                           overflow-hidden isolate"
//                 aria-label="Contact Me"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                   </svg>
//                   GET IN TOUCH
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
              
//               <button 
//                 onClick={() => setShowCVModal(true)}
//                 className="relative group flex items-center justify-center gap-3 px-6 py-4
//                           text-gray-300 hover:text-white transition-colors duration-300"
//                 aria-label="Download CV"
//               >
//                 <div className="relative flex items-center justify-center">
//                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 
//                                 rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                   <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                                 group-hover:bg-transparent transition-colors duration-300">
//                     <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
//                     </svg>
//                   </div>
//                   <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 
//                                   group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//                 </div>
//                 <span className="font-medium">DOWNLOAD CV</span>
//               </button>
//             </div>
//           </div>
          
//           {/* Professional image */}
//           <div 
//             className="lg:w-1/2 flex justify-center relative mt-16 lg:mt-0"
//             onMouseEnter={() => handleImageHover(true)}
//             onMouseLeave={() => handleImageHover(false)}
//           >
//             <div 
//               ref={imageRef}
//               className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] transition-all duration-700 ease-out"
//             >
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full 
//                             blur-xl opacity-20 animate-pulse"></div>
              
//               {/* Main profile image */}
//               <img 
//                 src={profileImg} 
//                 alt="Sabirin Mohamud - Professional Web Developer" 
//                 className="relative rounded-full border-4 border-yellow-500 w-full h-full object-cover shadow-2xl z-10
//                           transition-all duration-500 ease-out"
//               />
              
              // {/* Floating badges */}
              // <div className="absolute -right-6 -bottom-6 z-20">
              //   <div className={`relative w-28 h-28 bg-gray-800/90 backdrop-blur-md rounded-2xl 
              //                   border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out
              //                   group ${isHovering ? 'translate-y-2 -rotate-3 scale-[1.02]' : ''}
              //                   hover:shadow-pink-500/20 hover:border-pink-500/40`}>
              //     <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              //       <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
              //                      group-hover:bg-pink-500/10 group-hover:shadow-pink-500/10">
              //         <FaHeart className="text-5xl text-pink-500 transition-transform duration-500 
              //                            group-hover:scale-110 group-hover:animate-pulse" />
              //       </div>
              //       <span className="text-xs font-medium text-gray-300 mt-1">
              //         24K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Loves</span>
              //       </span>
              //     </div>
              //   </div>
              // </div>

              // <div className="absolute -left-6 -top-6 z-20">
              //   <div className={`relative w-24 h-24 bg-gray-800/90 backdrop-blur-md rounded-2xl 
              //                   border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out delay-100
              //                   group ${isHovering ? 'translate-y-2 rotate-3 scale-[1.02]' : ''}
              //                   hover:shadow-blue-500/20 hover:border-blue-500/40`}>
              //     <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              //       <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
              //                      group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
              //         <FaThumbsUp className="text-4xl text-yellow-500 transition-transform duration-500 
              //                              group-hover:scale-110 group-hover:rotate-12" />
              //       </div>
              //       <span className="text-xs font-medium text-gray-300 mt-1">
              //         18K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Likes</span>
              //       </span>
              //     </div>
              //   </div>
              // </div>
              
//               {/* Animated connection lines */}
//               <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <line 
//                   x1="70%" y1="70%" x2="85%" y2="85%" 
//                   stroke="url(#lineGradient)" 
//                   strokeWidth="2" 
//                   strokeDasharray="0 10"
//                   className={`transition-all duration-1000 ease-out ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//                 />
//                 <line 
//                   x1="30%" y1="30%" x2="15%" y2="15%" 
//                   stroke="url(#lineGradient)" 
//                   strokeWidth="2" 
//                   strokeDasharray="0 10"
//                   className={`transition-all duration-1000 ease-out delay-100 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//                 />
//                 <defs>
//                   <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
//                     <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Custom animations */}
//         <style jsx global>{`
//           @keyframes roleEnter {
//             0% { opacity: 0; transform: translateY(15px) scale(0.95); }
//             100% { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           @keyframes roleExit {
//             0% { opacity: 1; transform: translateY(0) scale(1); }
//             100% { opacity: 0; transform: translateY(-15px) scale(0.95); }
//           }
//           @keyframes ping-slow {
//             0% { transform: scale(0.95); opacity: 0.8; }
//             70% { transform: scale(1.2); opacity: 0.2; }
//             100% { transform: scale(1.3); opacity: 0; }
//           }
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-15px); }
//           }
//           @keyframes background-shine {
//             from { background-position: 0 0; }
//             to { background-position: -200% 0; }
//           }
//           .role-enter {
//             animation: roleEnter 0.8s cubic-bezier(0.2, 0, 0.1, 1) forwards;
//           }
//           .role-exit {
//             animation: roleExit 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards;
//           }
//           .animate-ping-slow {
//             animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
//           }
//           .animate-float {
//             animation: float 8s ease-in-out infinite;
//           }
//           .animate-float-delay {
//             animation: float 8s ease-in-out infinite 2s;
//           }
//           .animate-background-shine {
//             animation: background-shine 2s linear infinite;
//           }
//         `}</style>
//       </header>

//       {/* CV Modal */}
//       <CVModal isOpen={showCVModal} onClose={() => setShowCVModal(false)} />
//     </>
//   );
// };

// // CVModal Component
// const CVModal = ({ isOpen, onClose }) => {
//   const [activeTab, setActiveTab] = useState('preview');
  
//   const wordFileUrl = 'https://drive.google.com/uc?export=download&id=11i9DSBU461E094-T5KI0aygJotPJgBig';
  
//   return (
//     <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col mx-4">
//         <div className="flex justify-between items-center border-b p-4">
//           <h2 className="text-xl font-bold">Sabirin Mohamud Adan - Curriculum Vitae</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             ✕
//           </button>
//         </div>
        
//         <div className="flex border-b">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'preview' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('preview')}
//           >
//             Preview
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'download' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('download')}
//           >
//             Download
//           </button>
//         </div>

//         <div className="flex-grow overflow-auto">
//           {activeTab === 'preview' ? (
//             <div className="h-[60vh] p-4">
//               <p className="text-center text-gray-500">
//                 Preview not available. Please download the CV to view it.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//               <DownloadOption
//                 icon="📄"
//                 title="Download Word (DOCX)"
//                 description="Original editable format"
//                 url={wordFileUrl}
//                 fileName="Sabirin_Mohamud_CV.docx"
//               />
//               <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-medium mb-2">Alternative Options</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     Email: <a 
//                       href="mailto:sabrinmohamud247@gmail.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       sabrinmohamud247@gmail.com
//                     </a> to request the CV
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // DownloadOption Component
// const DownloadOption = ({ icon, title, description, url, fileName }) => (
//   <a
//     href={url}
//     download={fileName}
//     className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <span className="text-2xl mb-2">{icon}</span>
//     <h3 className="font-medium">{title}</h3>
//     <p className="text-sm text-gray-500 mt-1">{description}</p>
//   </a>
// );

// export default Header;


// -----------------------


// import React, { useState, useEffect, useRef } from 'react';
// import { FaHeart, FaThumbsUp } from 'react-icons/fa';
// import profileImg from '../assets/spii.jpg';

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [showCVModal, setShowCVModal] = useState(false);
//   const roles = ["Web Developer", ".........", "UI/UX Designer"];
//   const roleRef = useRef(null);
//   const imageRef = useRef(null);
//   const headerRef = useRef(null);
  
//   // Parallax effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current) {
//         headerRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Role rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3200);
//     return () => clearInterval(interval);
//   }, []);

//   // Text animation
//   useEffect(() => {
//     if (roleRef.current) {
//       roleRef.current.classList.add('role-exit');
//       setTimeout(() => {
//         if (roleRef.current) {
//           roleRef.current.classList.remove('role-exit');
//           roleRef.current.classList.add('role-enter');
//           setTimeout(() => {
//             if (roleRef.current) roleRef.current.classList.remove('role-enter');
//           }, 800);
//         }
//       }, 500);
//     }
//   }, [currentRole]);

//   // Image hover effect
//   const handleImageHover = (hovering) => {
//     setIsHovering(hovering);
//     if (imageRef.current) {
//       imageRef.current.style.transform = hovering 
//         ? 'scale(1.03) rotate(2deg)' 
//         : 'scale(1) rotate(0deg)';
//     }
//   };

//   return (
//     <>
//       <header 
//         id="home" 
//         ref={headerRef}
//         className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20 overflow-hidden relative"
//       >
//         {/* Background elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-400 rounded-full filter blur-2xl opacity-10 animate-float-delay"></div>
//           <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-yellow-300 rounded-full filter blur-xl opacity-10 animate-float"></div>
//         </div>

//         <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
//           {/* Left text content */}
//           <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
//             <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 
//                             text-white px-5 py-2 rounded-full mb-6 shadow-lg 
//                             hover:shadow-xl transition-all duration-500 hover:scale-[1.02]
//                             animate-background-shine bg-[length:200%_100%]">
//               <span className="text-lg font-medium tracking-wide">Hi, I am</span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
//                 SABIRIN
//               </span>{' '}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
//                 MOHAMUD
//               </span>
//             </h1>
            
//             <div className="h-20 md:h-24 mb-8 overflow-hidden relative">
//               <h2 
//                 ref={roleRef}
//                 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent 
//                           bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-wide"
//               >
//                 {roles[currentRole]}
//               </h2>
//               <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
//             </div>
            
//             <p className="text-gray-300 mb-10 max-w-2xl text-lg md:text-xl leading-relaxed">
//               Welcome to my portfolio! I am Sabirin, a skilled Full Stack Developer specializing
//               in the <span className="text-yellow-500 font-semibold"> MERN stack (MongoDB, Express.js, React, Node.js)</span>, 
//               with additional expertise in PHP, MySQL, and Java.
//               Proficient in building responsive, scalable web applications, I am passionate about solving
//               complex problems and creating user-friendly websites
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
//               <button 
//                 className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
//                           px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg
//                           transition-all duration-500 hover:shadow-xl hover:-translate-y-1
//                           overflow-hidden isolate"
//                 aria-label="Contact Me"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                   </svg>
//                   GET IN TOUCH
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
              
//               <button 
//                 onClick={() => setShowCVModal(true)}
//                 className="relative group flex items-center justify-center gap-3 px-6 py-4
//                           text-gray-300 hover:text-white transition-colors duration-300"
//                 aria-label="Download CV"
//               >
//                 <div className="relative flex items-center justify-center">
//                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 
//                                 rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                   <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                                 group-hover:bg-transparent transition-colors duration-300">
//                     <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
//                     </svg>
//                   </div>
//                   <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 
//                                   group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//                 </div>
//                 <span className="font-medium">DOWNLOAD CV</span>
//               </button>
//             </div>
//           </div>
          
//           {/* Right image content */}
//           <div 
//             className="lg:w-1/2 flex justify-center relative mt-16 lg:mt-0"
//             onMouseEnter={() => handleImageHover(true)}
//             onMouseLeave={() => handleImageHover(false)}
//           >
//             <div 
//               ref={imageRef}
//               className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] transition-all duration-700 ease-out"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full 
//                             blur-xl opacity-20 animate-pulse"></div>
              
//               <img 
//                 src={profileImg} 
//                 alt="Sabirin Mohamud - Professional Web Developer" 
//                 className="relative rounded-full border-4 border-yellow-500 w-full h-full object-cover shadow-2xl z-10
//                           transition-all duration-500 ease-out"
//               />
              
//               <div className="absolute -right-6 -bottom-6 z-20">
//                 <div className={`relative w-28 h-28 bg-gray-800/90 backdrop-blur-md rounded-2xl 
//                                 border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out
//                                 group ${isHovering ? 'translate-y-2 -rotate-3 scale-[1.02]' : ''}
//                                 hover:shadow-pink-500/20 hover:border-pink-500/40`}>
//                   <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
//                     <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
//                                    group-hover:bg-pink-500/10 group-hover:shadow-pink-500/10">
//                       <FaHeart className="text-5xl text-pink-500 transition-transform duration-500 
//                                          group-hover:scale-110 group-hover:animate-pulse" />
//                     </div>
//                     <span className="text-xs font-medium text-gray-300 mt-1">
//                       24K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Loves</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -left-6 -top-6 z-20">
//                 <div className={`relative w-24 h-24 bg-gray-800/90 backdrop-blur-md rounded-2xl 
//                                 border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out delay-100
//                                 group ${isHovering ? 'translate-y-2 rotate-3 scale-[1.02]' : ''}
//                                 hover:shadow-blue-500/20 hover:border-blue-500/40`}>
//                   <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
//                     <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
//                                    group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
//                       <FaThumbsUp className="text-4xl text-yellow-500 transition-transform duration-500 
//                                            group-hover:scale-110 group-hover:rotate-12" />
//                     </div>
//                     <span className="text-xs font-medium text-gray-300 mt-1">
//                       18K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Likes</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
              
//               <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <line 
//                   x1="70%" y1="70%" x2="85%" y2="85%" 
//                   stroke="url(#lineGradient)" 
//                   strokeWidth="2" 
//                   strokeDasharray="0 10"
//                   className={`transition-all duration-1000 ease-out ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//                 />
//                 <line 
//                   x1="30%" y1="30%" x2="15%" y2="15%" 
//                   stroke="url(#lineGradient)" 
//                   strokeWidth="2" 
//                   strokeDasharray="0 10"
//                   className={`transition-all duration-1000 ease-out delay-100 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//                 />
//                 <defs>
//                   <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
//                     <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <style jsx global>{`
//           @keyframes roleEnter {
//             0% { opacity: 0; transform: translateY(15px) scale(0.95); }
//             100% { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           @keyframes roleExit {
//             0% { opacity: 1; transform: translateY(0) scale(1); }
//             100% { opacity: 0; transform: translateY(-15px) scale(0.95); }
//           }
//           @keyframes ping-slow {
//             0% { transform: scale(0.95); opacity: 0.8; }
//             70% { transform: scale(1.2); opacity: 0.2; }
//             100% { transform: scale(1.3); opacity: 0; }
//           }
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-15px); }
//           }
//           @keyframes background-shine {
//             from { background-position: 0 0; }
//             to { background-position: -200% 0; }
//           }
//           .role-enter {
//             animation: roleEnter 0.8s cubic-bezier(0.2, 0, 0.1, 1) forwards;
//           }
//           .role-exit {
//             animation: roleExit 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards;
//           }
//           .animate-ping-slow {
//             animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
//           }
//           .animate-float {
//             animation: float 8s ease-in-out infinite;
//           }
//           .animate-float-delay {
//             animation: float 8s ease-in-out infinite 2s;
//           }
//           .animate-background-shine {
//             animation: background-shine 2s linear infinite;
//           }
//         `}</style>
//       </header>

//       <CVModal isOpen={showCVModal} onClose={() => setShowCVModal(false)} />
//     </>
//   );
// };

// const CVModal = ({ isOpen, onClose }) => {
//   const [activeTab, setActiveTab] = useState('preview');
  
//   // Correct Google Drive download URL for Word document
//   const wordFileUrl = 'https://drive.google.com/uc?export=download&id=11i9DSBU461E094-T5KI0aygJotPJgBig';
  
//   return (
//     <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col mx-4">
//         <div className="flex justify-between items-center border-b p-4">
//           <h2 className="text-xl font-bold">Sabirin Mohamud Adan - Curriculum Vitae</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             ✕
//           </button>
//         </div>
        
//         <div className="flex border-b">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'preview' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('preview')}
//           >
//             Preview
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'download' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('download')}
//           >
//             Download
//           </button>
//         </div>

//         <div className="flex-grow overflow-auto">
//           {activeTab === 'preview' ? (
//             <div className="h-[60vh] p-4">
//               <p className="text-center text-gray-500">
//                 Preview not available. Please download the CV to view it.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//               <a
//                 href={wordFileUrl}
//                 download="Sabirin_Mohamud_CV.docx"
//                 className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="text-2xl mb-2">📄</span>
//                 <h3 className="font-medium">Download Word (DOCX)</h3>
//                 <p className="text-sm text-gray-500 mt-1">Original editable format</p>
//               </a>
              
//               <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-medium mb-2">Alternative Options</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     Email: <a 
//                       href="mailto:sabrinmohamud247@gmail.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       sabrinmohamud247@gmail.com
//                     </a> to request the CV
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
// -----------


// import React, { useState, useEffect, useRef } from 'react';
// import { FaHeart, FaThumbsUp, FaEye } from 'react-icons/fa';
// import profileImg from '../assets/spii.jpg';

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [showCVModal, setShowCVModal] = useState(false);
//   const [cvAction, setCvAction] = useState('view'); // 'view' or 'download'
//   const roles = ["Web Developer", ".........", "UI/UX Designer"];
//   const roleRef = useRef(null);
//   const imageRef = useRef(null);
//   const headerRef = useRef(null);
  
//   // ... (keep all your existing useEffect hooks and other functions)

//   return (
//     <>
//       <header 
//         id="home" 
//         ref={headerRef}
//         className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20 overflow-hidden relative"
//       >
//         {/* ... (keep all your existing header content) */}

//         <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
//           {/* Left text content */}
//           <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
//             {/* ... (keep all your existing left content) */}
            
//             <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
//               <button 
//                 className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
//                           px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg
//                           transition-all duration-500 hover:shadow-xl hover:-translate-y-1
//                           overflow-hidden isolate"
//                 aria-label="Contact Me"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                   </svg>
//                   GET IN TOUCH
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
              
//               <div className="flex gap-3">
//                 <button 
//                   onClick={() => {
//                     setCvAction('view');
//                     setShowCVModal(true);
//                   }}
//                   className="relative group flex items-center justify-center gap-3 px-6 py-4
//                             text-gray-300 hover:text-white transition-colors duration-300"
//                   aria-label="View CV"
//                 >
//                   <div className="relative flex items-center justify-center">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 
//                                   rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                     <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                                   group-hover:bg-transparent transition-colors duration-300">
//                       <FaEye className="w-5 h-5 text-blue-400" />
//                     </div>
//                     <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 
//                                     group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//                   </div>
//                   <span className="font-medium">VIEW CV</span>
//                 </button>

//                 <button 
//                   onClick={() => {
//                     setCvAction('download');
//                     setShowCVModal(true);
//                   }}
//                   className="relative group flex items-center justify-center gap-3 px-6 py-4
//                             text-gray-300 hover:text-white transition-colors duration-300"
//                   aria-label="Download CV"
//                 >
//                   <div className="relative flex items-center justify-center">
//                     <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 
//                                   rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                     <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                                   group-hover:bg-transparent transition-colors duration-300">
//                       <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
//                       </svg>
//                     </div>
//                     <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 
//                                     group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//                   </div>
//                   <span className="font-medium">DOWNLOAD CV</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* ... (keep all your existing right image content) */}
//         </div>

//         {/* ... (keep all your existing styles) */}
//       </header>

//       <CVModal 
//         isOpen={showCVModal} 
//         onClose={() => setShowCVModal(false)} 
//         defaultAction={cvAction}
//       />
//     </>
//   );
// };

// const CVModal = ({ isOpen, onClose, defaultAction = 'view' }) => {
//   const [activeTab, setActiveTab] = useState(defaultAction);
//   const wordFileUrl = 'https://drive.google.com/uc?export=download&id=11i9DSBU461E094-T5KI0aygJotPJgBig';
//   const cvViewUrl = 'https://drive.google.com/file/d/11i9DSBU461E094-T5KI0aygJotPJgBig/preview';
  
//   useEffect(() => {
//     setActiveTab(defaultAction);
//   }, [defaultAction]);

//   return (
//     <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col mx-4">
//         <div className="flex justify-between items-center border-b p-4">
//           <h2 className="text-xl font-bold">Sabirin Mohamud Adan - Curriculum Vitae</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             ✕
//           </button>
//         </div>
        
//         <div className="flex border-b">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'view' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('view')}
//           >
//             View CV
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'download' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('download')}
//           >
//             Download
//           </button>
//         </div>

//         <div className="flex-grow overflow-auto">
//           {activeTab === 'view' ? (
//             <div className="h-[70vh]">
//               <iframe 
//                 src={cvViewUrl}
//                 className="w-full h-full border-0"
//                 title="Sabirin Mohamud CV Preview"
//                 allow="autoplay"
//               ></iframe>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//               <a
//                 href={wordFileUrl}
//                 download="Sabirin_Mohamud_CV.docx"
//                 className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="text-2xl mb-2">📄</span>
//                 <h3 className="font-medium">Download Word (DOCX)</h3>
//                 <p className="text-sm text-gray-500 mt-1">Original editable format</p>
//               </a>
              
//               <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-medium mb-2">Alternative Options</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     Email: <a 
//                       href="mailto:sabrinmohamud247@gmail.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       sabrinmohamud247@gmail.com
//                     </a> to request the CV
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



// ----------------------


// import React, { useState, useEffect, useRef } from 'react';
// import { FaHeart, FaThumbsUp, FaEye, FaDownload } from 'react-icons/fa';
// import profileImg from '../assets/spii.jpg';

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [showCVModal, setShowCVModal] = useState(false);
//   const [cvAction, setCvAction] = useState('view'); // 'view' or 'download'
//   const roles = ["Web Developer", ".........", "UI/UX Designer"];
//   const roleRef = useRef(null);
//   const imageRef = useRef(null);
//   const headerRef = useRef(null);
  
//   // Parallax effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current) {
//         headerRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Role rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3200);
//     return () => clearInterval(interval);
//   }, []);

//   // Text animation
//   useEffect(() => {
//     if (roleRef.current) {
//       roleRef.current.classList.add('role-exit');
//       setTimeout(() => {
//         if (roleRef.current) {
//           roleRef.current.classList.remove('role-exit');
//           roleRef.current.classList.add('role-enter');
//           setTimeout(() => {
//             if (roleRef.current) roleRef.current.classList.remove('role-enter');
//           }, 800);
//         }
//       }, 500);
//     }
//   }, [currentRole]);

//   // Image hover effect
//   const handleImageHover = (hovering) => {
//     setIsHovering(hovering);
//     if (imageRef.current) {
//       imageRef.current.style.transform = hovering 
//         ? 'scale(1.03) rotate(2deg)' 
//         : 'scale(1) rotate(0deg)';
//     }
//   };

//   return (
//     <>
//       <header 
//         id="home" 
//         ref={headerRef}
//         className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20 overflow-hidden relative"
//       >
//         {/* Background elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-400 rounded-full filter blur-2xl opacity-10 animate-float-delay"></div>
//           <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-yellow-300 rounded-full filter blur-xl opacity-10 animate-float"></div>
//         </div>

//         <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
//           {/* Left text content */}
//           <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
//             <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 
//                             text-white px-5 py-2 rounded-full mb-6 shadow-lg 
//                             hover:shadow-xl transition-all duration-500 hover:scale-[1.02]
//                             animate-background-shine bg-[length:200%_100%]">
//               <span className="text-lg font-medium tracking-wide">Hi, I am</span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
//                 SABIRIN
//               </span>{' '}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
//                 MOHAMUD
//               </span>
//             </h1>
            
//             <div className="h-20 md:h-24 mb-8 overflow-hidden relative">
//               <h2 
//                 ref={roleRef}
//                 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent 
//                           bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-wide"
//               >
//                 {roles[currentRole]}
//               </h2>
//               <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
//             </div>
            
//             <p className="text-gray-300 mb-10 max-w-2xl text-lg md:text-xl leading-relaxed">
//               Welcome to my portfolio! I am Sabirin, a skilled Full Stack Developer specializing
//               in the <span className="text-yellow-500 font-semibold"> MERN stack (MongoDB, Express.js, React, Node.js)</span>, 
//               with additional expertise in PHP, MySQL, and Java.
//               Proficient in building responsive, scalable web applications, I am passionate about solving
//               complex problems and creating user-friendly websites
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
//               <button 
//                 className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
//                           px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg
//                           transition-all duration-500 hover:shadow-xl hover:-translate-y-1
//                           overflow-hidden isolate"
//                 aria-label="Contact Me"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                   </svg>
//                   GET IN TOUCH
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
              
//               <div className="flex gap-3">
//                 <button 
//                   onClick={() => {
//                     setCvAction('view');
//                     setShowCVModal(true);
//                   }}
//                   className="relative group flex items-center justify-center gap-3 px-6 py-4
//                             text-gray-300 hover:text-white transition-colors duration-300"
//                   aria-label="View CV"
//                 >
//                   <div className="relative flex items-center justify-center">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 
//                                   rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                     <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                                   group-hover:bg-transparent transition-colors duration-300">
//                       <FaEye className="w-5 h-5 text-blue-400" />
//                     </div>
//                     <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 
//                                     group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//                   </div>
//                   <span className="font-medium">VIEW CV</span>
//                 </button>

//                 <button 
//                   onClick={() => {
//                     setCvAction('download');
//                     setShowCVModal(true);
//                   }}
//                   className="relative group flex items-center justify-center gap-3 px-6 py-4
//                             text-gray-300 hover:text-white transition-colors duration-300"
//                   aria-label="Download CV"
//                 >
//                   <div className="relative flex items-center justify-center">
//                     <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 
//                                   rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                     <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                                   group-hover:bg-transparent transition-colors duration-300">
//                       <FaDownload className="w-5 h-5 text-yellow-400" />
//                     </div>
//                     <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 
//                                     group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//                   </div>
//                   <span className="font-medium">DOWNLOAD CV</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Right image content */}
//           <div 
//             className="lg:w-1/2 flex justify-center relative mt-16 lg:mt-0"
//             onMouseEnter={() => handleImageHover(true)}
//             onMouseLeave={() => handleImageHover(false)}
//           >
//             <div 
//               ref={imageRef}
//               className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] transition-all duration-700 ease-out"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full 
//                             blur-xl opacity-20 animate-pulse"></div>
              
//               <img 
//                 src={profileImg} 
//                 alt="Sabirin Mohamud - Professional Web Developer" 
//                 className="relative rounded-full border-4 border-yellow-500 w-full h-full object-cover shadow-2xl z-10
//                           transition-all duration-500 ease-out"
//               />
              
//               <div className="absolute -right-6 -bottom-6 z-20">
//                 <div className={`relative w-28 h-28 bg-gray-800/90 backdrop-blur-md rounded-2xl 
//                                 border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out
//                                 group ${isHovering ? 'translate-y-2 -rotate-3 scale-[1.02]' : ''}
//                                 hover:shadow-pink-500/20 hover:border-pink-500/40`}>
//                   <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
//                     <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
//                                    group-hover:bg-pink-500/10 group-hover:shadow-pink-500/10">
//                       <FaHeart className="text-5xl text-pink-500 transition-transform duration-500 
//                                          group-hover:scale-110 group-hover:animate-pulse" />
//                     </div>
//                     <span className="text-xs font-medium text-gray-300 mt-1">
//                       24K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Loves</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -left-6 -top-6 z-20">
//                 <div className={`relative w-24 h-24 bg-gray-800/90 backdrop-blur-md rounded-2xl 
//                                 border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out delay-100
//                                 group ${isHovering ? 'translate-y-2 rotate-3 scale-[1.02]' : ''}
//                                 hover:shadow-blue-500/20 hover:border-blue-500/40`}>
//                   <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
//                     <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
//                                    group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
//                       <FaThumbsUp className="text-4xl text-yellow-500 transition-transform duration-500 
//                                            group-hover:scale-110 group-hover:rotate-12" />
//                     </div>
//                     <span className="text-xs font-medium text-gray-300 mt-1">
//                       18K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Likes</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
              
//               <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <line 
//                   x1="70%" y1="70%" x2="85%" y2="85%" 
//                   stroke="url(#lineGradient)" 
//                   strokeWidth="2" 
//                   strokeDasharray="0 10"
//                   className={`transition-all duration-1000 ease-out ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//                 />
//                 <line 
//                   x1="30%" y1="30%" x2="15%" y2="15%" 
//                   stroke="url(#lineGradient)" 
//                   strokeWidth="2" 
//                   strokeDasharray="0 10"
//                   className={`transition-all duration-1000 ease-out delay-100 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
//                 />
//                 <defs>
//                   <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
//                     <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <style jsx global>{`
//           @keyframes roleEnter {
//             0% { opacity: 0; transform: translateY(15px) scale(0.95); }
//             100% { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           @keyframes roleExit {
//             0% { opacity: 1; transform: translateY(0) scale(1); }
//             100% { opacity: 0; transform: translateY(-15px) scale(0.95); }
//           }
//           @keyframes ping-slow {
//             0% { transform: scale(0.95); opacity: 0.8; }
//             70% { transform: scale(1.2); opacity: 0.2; }
//             100% { transform: scale(1.3); opacity: 0; }
//           }
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-15px); }
//           }
//           @keyframes background-shine {
//             from { background-position: 0 0; }
//             to { background-position: -200% 0; }
//           }
//           .role-enter {
//             animation: roleEnter 0.8s cubic-bezier(0.2, 0, 0.1, 1) forwards;
//           }
//           .role-exit {
//             animation: roleExit 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards;
//           }
//           .animate-ping-slow {
//             animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
//           }
//           .animate-float {
//             animation: float 8s ease-in-out infinite;
//           }
//           .animate-float-delay {
//             animation: float 8s ease-in-out infinite 2s;
//           }
//           .animate-background-shine {
//             animation: background-shine 2s linear infinite;
//           }
//         `}</style>
//       </header>

//       <CVModal 
//         isOpen={showCVModal} 
//         onClose={() => setShowCVModal(false)} 
//         defaultAction={cvAction}
//       />
//     </>
//   );
// };

// const CVModal = ({ isOpen, onClose, defaultAction = 'view' }) => {
//   const [activeTab, setActiveTab] = useState(defaultAction);
//   const wordFileUrl = 'https://drive.google.com/uc?export=download&id=11i9DSBU461E094-T5KI0aygJotPJgBig';
//   const cvViewUrl = 'https://drive.google.com/file/d/11i9DSBU461E094-T5KI0aygJotPJgBig/preview';
  
//   useEffect(() => {
//     setActiveTab(defaultAction);
//   }, [defaultAction]);

//   return (
//     <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col mx-4">
//         <div className="flex justify-between items-center border-b p-4">
//           <h2 className="text-xl font-bold">Sabirin Mohamud Adan - Curriculum Vitae</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             ✕
//           </button>
//         </div>
        
//         <div className="flex border-b">
//           {/* <button
//             className={`px-4 py-2 font-medium ${activeTab === 'view' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('view')}
//           >
//             View CV
//           </button> */}
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'download' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('download')}
//           >
//             Download
//           </button>
//         </div>

//         <div className="flex-grow overflow-auto">
//           {activeTab === 'view' ? (
//             <div className="h-[70vh]">
//               <iframe 
//                 src={cvViewUrl}
//                 className="w-full h-full border-0"
//                 title="Sabirin Mohamud CV Preview"
//                 allow="autoplay"
//               ></iframe>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//               <a
//                 href={wordFileUrl}
//                 download="Sabirin_Mohamud_CV.docx"
//                 className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="text-2xl mb-2">📄</span>
//                 <h3 className="font-medium">Download Word (DOCX)</h3>
//                 <p className="text-sm text-gray-500 mt-1">Original editable format</p>
//               </a>
              
//               <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-medium mb-2">Alternative Options</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     Email: <a 
//                       href="mailto:sabrinmohamud247@gmail.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       sabrinmohamud247@gmail.com
//                     </a> to request the CV
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useEffect, useRef } from 'react';
// import { FaHeart, FaThumbsUp, FaEye, FaDownload } from 'react-icons/fa';
// import profileImg from '../assets/spii.jpg';

// const Header = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [showCVModal, setShowCVModal] = useState(false);
//   const roles = ["Web Developer", ".........", "UI/UX Designer"];
//   const roleRef = useRef(null);
//   const imageRef = useRef(null);
//   const headerRef = useRef(null);
  
//   // ... (keep all existing useEffect hooks and functions)

//   return (
//     <>
//       <header 
//         id="home" 
//         ref={headerRef}
//         className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20 overflow-hidden relative"
//       >
//         {/* ... (keep all existing header content) */}

//         <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
//           {/* Left text content */}
//           <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
//             {/* ... (keep all existing left content) */}
            
//             <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
//               {/* ... (keep existing GET IN TOUCH button) */}
              
//               <button 
//                 onClick={() => setShowCVModal(true)}
//                 className="relative group flex items-center justify-center gap-3 px-6 py-4
//                           text-gray-300 hover:text-white transition-colors duration-300"
//                 aria-label="CV Options"
//               >
//                 <div className="relative flex items-center justify-center">
//                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 
//                                 rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
//                   <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
//                                 group-hover:bg-transparent transition-colors duration-300">
//                     <div className="flex flex-col items-center">
//                       <FaEye className="w-4 h-4 text-blue-400" />
//                       <FaDownload className="w-4 h-4 text-white mt-1" />
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 
//                                   group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
//                 </div>
//                 <span className="font-medium">MY CV</span>
//               </button>
//             </div>
//           </div>
          
//           {/* ... (keep all existing right image content) */}
//         </div>

//         {/* ... (keep all existing styles) */}
//       </header>

//       <CVModal isOpen={showCVModal} onClose={() => setShowCVModal(false)} />
//     </>
//   );
// };

// const CVModal = ({ isOpen, onClose }) => {
//   const [activeTab, setActiveTab] = useState('view');
//   const wordFileUrl = 'https://drive.google.com/uc?export=download&id=11i9DSBU461E094-T5KI0aygJotPJgBig';
//   const cvViewUrl = 'https://drive.google.com/file/d/11i9DSBU461E094-T5KI0aygJotPJgBig/preview';
  
//   return (
//     <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col mx-4">
//         <div className="flex justify-between items-center border-b p-4">
//           <h2 className="text-xl font-bold">Sabirin Mohamud Adan - Curriculum Vitae</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             ✕
//           </button>
//         </div>
        
//         <div className="flex border-b">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'view' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('view')}
//           >
//             View CV
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'download' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('download')}
//           >
//             Download
//           </button>
//         </div>

//         <div className="flex-grow overflow-auto">
//           {activeTab === 'view' ? (
//             <div className="h-[70vh]">
//               <iframe 
//                 src={cvViewUrl}
//                 className="w-full h-full border-0"
//                 title="Sabirin Mohamud CV Preview"
//                 allow="autoplay"
//               ></iframe>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//               <a
//                 href={wordFileUrl}
//                 download="Sabirin_Mohamud_CV.docx"
//                 className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="text-2xl mb-2">📄</span>
//                 <h3 className="font-medium">Download Word (DOCX)</h3>
//                 <p className="text-sm text-gray-500 mt-1">Original editable format</p>
//               </a>
              
//               <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-medium mb-2">Alternative Options</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     Email: <a 
//                       href="mailto:sabrinmohamud247@gmail.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       sabrinmohamud247@gmail.com
//                     </a> to request the CV
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaThumbsUp, FaEye, FaDownload } from 'react-icons/fa';
import profileImg from '../assets/spii.jpg';

const Header = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const roles = ["Web Developer", ".........", "UI/UX Designer"];
  const roleRef = useRef(null);
  const imageRef = useRef(null);
  const headerRef = useRef(null);
  
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Text animation
  useEffect(() => {
    if (roleRef.current) {
      roleRef.current.classList.add('role-exit');
      setTimeout(() => {
        if (roleRef.current) {
          roleRef.current.classList.remove('role-exit');
          roleRef.current.classList.add('role-enter');
          setTimeout(() => {
            if (roleRef.current) roleRef.current.classList.remove('role-enter');
          }, 800);
        }
      }, 500);
    }
  }, [currentRole]);

  // Image hover effect
  const handleImageHover = (hovering) => {
    setIsHovering(hovering);
    if (imageRef.current) {
      imageRef.current.style.transform = hovering 
        ? 'scale(1.03) rotate(2deg)' 
        : 'scale(1) rotate(0deg)';
    }
  };

  return (
    <>
      <header 
        id="home" 
        ref={headerRef}
        className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20 overflow-hidden relative"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-400 rounded-full filter blur-2xl opacity-10 animate-float-delay"></div>
          <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-yellow-300 rounded-full filter blur-xl opacity-10 animate-float"></div>
        </div>

        <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Left text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
            <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 
                            text-white px-5 py-2 rounded-full mb-6 shadow-lg 
                            hover:shadow-xl transition-all duration-500 hover:scale-[1.02]
                            animate-background-shine bg-[length:200%_100%]">
              <span className="text-lg font-medium tracking-wide">Hi, I am</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r
               from-white to-gray-300">
                Sabirin
              </span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r
               from-yellow-400 to-yellow-600">
                Mohamud
              </span>
            </h1>
            
            <div className="h-20 md:h-24 mb-8 overflow-hidden relative">
              <h2 
                ref={roleRef}
                className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent 
                          bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-wide"
              >
                {roles[currentRole]}
              </h2>
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 mb-10 max-w-2xl text-lg md:text-xl leading-relaxed">
              Welcome to my portfolio! I am Sabirin, a skilled Full Stack Developer specializing
              in the <span className="text-yellow-500 font-semibold"> MERN stack (MongoDB, Express.js, React, Node.js)</span>, 
              in building responsive, scalable web applications, I am passionate about solving
              complex problems and creating user-friendly websites
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
                          px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg
                          transition-all duration-500 hover:shadow-xl hover:-translate-y-1
                          overflow-hidden isolate"
                aria-label="Contact Me"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                  GET IN TOUCH
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => setShowCVModal(true)}
                className="relative group flex items-center justify-center gap-3 px-6 py-4
                          text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="CV Options"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 
                                rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center 
                                group-hover:bg-transparent transition-colors duration-300">
                    <div className="flex flex-col items-center">
                      <FaEye className="w-4 h-4 text-pink-500" />
                      <FaDownload className="w-4 h-4 text-white mt-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 
                                  group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-300"></div>
                </div>
                <span className="font-medium">MY CV</span>
              </button>
            </div>
          </div>
          
          {/* Right image content */}
          <div 
            className="lg:w-1/2 flex justify-center relative mt-16 lg:mt-0"
            onMouseEnter={() => handleImageHover(true)}
            onMouseLeave={() => handleImageHover(false)}
          >
            <div 
              ref={imageRef}
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] transition-all duration-700 ease-out"
            >
              {/* ... (keep existing image content) */}
              
              <img 
                 src={profileImg} 
                alt="Sabirin Mohamud - Professional Web Developer" 
               className="relative rounded-full border-4 border-yellow-500 w-full h-full object-cover shadow-2xl z-10
                          transition-all duration-500 ease-out"
              />  

 {/* Floating badges */}
 <div className="absolute -right-6 -bottom-6 z-20">
                <div className={`relative w-28 h-28 bg-gray-800/90 backdrop-blur-md rounded-2xl 
                                border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out
                                group ${isHovering ? 'translate-y-2 -rotate-3 scale-[1.02]' : ''}
                                hover:shadow-pink-500/20 hover:border-pink-500/40`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
                                   group-hover:bg-pink-500/10 group-hover:shadow-pink-500/10">
                      <FaHeart className="text-5xl text-pink-500 transition-transform duration-500 
                                         group-hover:scale-110 group-hover:animate-pulse" />
                    </div>
                    <span className="text-xs font-medium text-gray-300 mt-1">
                      24K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Loves</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 -top-6 z-20">
                <div className={`relative w-24 h-24 bg-gray-800/90 backdrop-blur-md rounded-2xl 
                                border border-gray-600/30 shadow-2xl transition-all duration-500 ease-out delay-100
                                group ${isHovering ? 'translate-y-2 rotate-3 scale-[1.02]' : ''}
                                hover:shadow-blue-500/20 hover:border-blue-500/40`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="relative mb-2 p-3 rounded-lg bg-gray-700/30 transition-all duration-300
                                   group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
                      <FaThumbsUp className="text-4xl text-yellow-500 transition-transform duration-500 
                                           group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                    <span className="text-xs font-medium text-gray-300 mt-1">
                      18K <span className="opacity-0 group-hover:opacity-100 transition-opacity">Likes</span>
                    </span>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes roleEnter {
            0% { opacity: 0; transform: translateY(15px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes roleExit {
            0% { opacity: 1; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(-15px) scale(0.95); }
          }
          @keyframes ping-slow {
            0% { transform: scale(0.95); opacity: 0.8; }
            70% { transform: scale(1.2); opacity: 0.2; }
            100% { transform: scale(1.3); opacity: 0; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes background-shine {
            from { background-position: 0 0; }
            to { background-position: -200% 0; }
          }
          .role-enter {
            animation: roleEnter 0.8s cubic-bezier(0.2, 0, 0.1, 1) forwards;
          }
          .role-exit {
            animation: roleExit 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards;
          }
          .animate-ping-slow {
            animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: float 8s ease-in-out infinite 2s;
          }
          .animate-background-shine {
            animation: background-shine 2s linear infinite;
          }
        `}</style>
      </header>

      {showCVModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col mx-4">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold">Sabirin Mohamud Adan - Curriculum Vitae</h2>
              <button onClick={() => setShowCVModal(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            
            <div className="flex border-b">
              <button
                className={`px-4 py-2 font-medium ${'border-b-2 border-blue-500 text-blue-600'}`}
              >
                View CV
              </button>
              <button
                className={`px-4 py-2 font-medium ${'text-gray-500 hover:text-gray-700'}`}
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=11i9DSBU461E094-T5KI0aygJotPJgBig', '_blank')}
              >
                Download
              </button>
            </div>

            <div className="flex-grow overflow-auto h-[70vh]">
              <iframe 
                src="https://drive.google.com/file/d/11i9DSBU461E094-T5KI0aygJotPJgBig/preview"
                className="w-full h-full border-0"
                title="Sabirin Mohamud CV Preview"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;